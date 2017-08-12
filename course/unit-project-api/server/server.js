'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const scraperController = require('./scraper');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// first sample route
app.get('/', scraperController.getData);

app.get('/example', scraperController.getData);

app.listen(2900);

module.exports = app;
