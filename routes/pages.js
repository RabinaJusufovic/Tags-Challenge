const { decodeBase64 } = require('bcryptjs');
const express = require('express');
const authController = require('../controllers/auth');
const db = require('../config/db');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register');
  });

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/', (req, res) => {
    res.render('index', { title: 'Tags Challenge' });
});

router.get('/home', (req, res) => {
    res.render('home');
});

module.exports = router;