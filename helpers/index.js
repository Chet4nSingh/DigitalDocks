const mongoose = require('mongoose');
const { products } = require('./seeds');
const Product = require('../models/product');

mongoose
  .connect("mongodb://localhost/ecommerce-project")
  .then(() => {
    console.log("Successfull!!");
  })
  .catch((err) => {
    console.log("error!!");
    console.log(err);
  });

const seedDB = async () => {
    await Product.deleteMany({});
    for (let product of products) {
        const newProduct = new Product(product);
        await newProduct.save();
    }
}


seedDB().then(() => {
    mongoose.connection.close();
})