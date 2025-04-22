const express = require('express');
const router = express.Router();
const ExpressError = require('../helpers/ExpressError');
const catchAsync = require('../helpers/catchAsync');
const { isLoggedIn } = require('../middleware');
const Product = require('../models/product');
const Cart = require('../models/cart');

router.get('/', catchAsync(async (req, res) => {
    const products = await Product.find();    
    res.render('shop/store', { products, categoryId: 'all' });
}));

router.get('/cart', isLoggedIn, catchAsync(async (req, res) => {
  const products = await Cart.find().populate('product');
  res.render('shop/cart', { products });
}));

router.get('/:categoryId', catchAsync(async (req, res) => {
    const { categoryId } = req.params;
    const products = await Product.find({title: `${categoryId.substring(0, categoryId.length - 1)}`});
    if (products.length === 0) throw new ExpressError('No products found', 400);
    res.render('shop/store', { products, categoryId });
}));

router.get('/:categoryId/:productId', catchAsync(async (req, res) => {
    const { categoryId, productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
        req.flash('error', 'Product does not exist');
        return res.redirect(`/store/${ categoryId }`);
    }
    res.render('shop/details', { product });
}));

router.post('/cart', isLoggedIn, catchAsync(async (req, res) => {
    const { productId } = req.body;        
    if (await Cart.exists({ product: productId })) {
      const inCart = await Cart.findOne({ product: productId });
      inCart.quantity += 1;
      await inCart.save();
    } else {   
      const product = await Product.findById(productId);
      const addedProduct = await new Cart({ product, quantity: 1 });
      await addedProduct.save();
    }
    req.flash('success', 'Product added to cart');
    res.redirect(`/store/cart`);
}));

router.delete('/cart', isLoggedIn, catchAsync(async(req, res) => {
  const { cartId } = req.body;
  const product = await Cart.findById(cartId);
  if (product.quantity > 1) {
    product.quantity -= 1;
    await product.save();
  } else {
    await Cart.findByIdAndDelete(cartId);
  }
  req.flash('success', 'Product removed from cart');
  res.redirect('/store/cart');
}));

module.exports = router;