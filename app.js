const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./helpers/ExpressError');
const catchAsync = require('./helpers/catchAsync');
const Product = require('./models/product');
const Cart = require('./models/cart');
const User = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const storeRoutes = require('./routes/store');
const userRoutes =require('./routes/users');


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

const sessionConfig = {
  secret: 'thisisasecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
})

app.use('/', userRoutes);
app.use('/store', storeRoutes);

app.get('/home', async (req, res) => {
    const products = await Product.find({ rating: { $gte: 4 }}, null, { limit: 8 });
    res.render('shop/home', { products });
})

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

