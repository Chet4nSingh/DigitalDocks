const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const catchAsync = require('../helpers/catchAsync');
const { storeReturnTo } = require('../middleware');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', catchAsync(async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to Digital Docks!');
            res.redirect('/home');
        });        
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}));

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.post('/login', storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), catchAsync(async (req, res) => {
    req.flash('success', 'Successfully logged in.');
    const redirectUrl = res.locals.returnTo || '/home';
    res.redirect(redirectUrl);
}));

router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Successfully logged out.');
        res.redirect('/home');
    });
}); 

module.exports = router;
