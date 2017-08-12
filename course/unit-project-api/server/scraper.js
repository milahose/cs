'use strict';

const cheerio = require('cheerio');
const request = require('request');

const scrapeController = {
    getData: (req, res, next) => {

        // change URL to any site that you want
        request('http://www.producthunt.com/', (error, response, html) => {
            let $ = cheerio.load(html);
            // add code here

        });

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ a: 1 }));
    }
};

module.exports = scrapeController;