const express = require('express');

const getQuote = require('./services/get-quote');

const router = express.Router();

router.get('/quotes/:id', getQuote);

module.exports = router;
