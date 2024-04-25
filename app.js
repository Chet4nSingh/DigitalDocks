const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const ExpressError = require('./helpers/ExpressError');
const catchAsync = require('./helpers/catchAsync');
const Product = require('./models/product');
const Cart = require('./models/cart');
const passport = require('passport');
const localStrategy = require('passport-local');

mongoose
  .connect("mongodb://localhost/ecommerce-project")
  .then(() => {
    console.log("Successfull!!");
  })
  .catch((err) => {
    console.log("error!!");
    console.log(err);
  });

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(methodOverride('_method'));

app.get('/home', async (req, res) => {
    const products = await Product.find({ rating: { $gte: 4 }}, null, { limit: 8 });
    res.render('shop/home', { products });
})

app.get('/store', catchAsync(async (req, res) => {
    const products = await Product.find();    
    res.render('shop/store', { products, categoryId: 'all' });
}));

app.get('/store/cart',  catchAsync(async (req, res) => {
  const products = await Cart.find().populate('product');
  res.render('shop/cart', { products });
}));

app.get('/store/:categoryId', catchAsync(async (req, res) => {
    const { categoryId } = req.params;
    const products = await Product.find({title: `${categoryId.substring(0, categoryId.length - 1)}`});
    if (products.length === 0) throw new ExpressError('No products found', 400);
    res.render('shop/store', { products, categoryId });
}));

app.get('/store/:categoryId/:productId', catchAsync(async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.render('shop/details', { product });
}));

app.post('/store', catchAsync(async (req, res) => {
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
    res.redirect(`/store/cart`);
}));

app.delete('/store/cart', async(req, res) => {
  const { cartId } = req.body;
  const product = await Cart.findById(cartId);
  if (product.quantity > 1) {
    product.quantity -= 1;
    await product.save();
  } else {
    await Cart.findByIdAndDelete(cartId);
  }
  res.redirect('/store/cart');
});

app.all('*', (req, res, next) => {
  next(new ExpressError('Page not found', 404));
})

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Something went wrong';
  res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
    console.log('listening...');
});

// Note: Add to cart feature!!