'use strict';

const cheerio = require('cheerio');
const request = require('request');

const scrapeController = {
  getData: (req, res, next) => {

    // change URL to any site that you want
    request('http://www.producthunt.com/', (error, response, html) => {
      let $ = cheerio.load(html);
      // add code here
      $.('element').each((i, el) => {
      	var a = $(this).prev();
      	console.log(a.text());
      });
    });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
  }
};

module.exports = scrapeController;

// <div class="constraintWidth_c0bbf content_58aa5" style="max-width:1100px;" data-reactid="43">
// 	<div class="cta_ee41c" data-reactid="44">
// 		<span class="title_88ce7 headline_7b490 default_029ca base_e2db5" data-reactid="45">Discover your next favorite thing</span>
// 			<p class="text_44214" data-reactid="46">Product Hunt surfaces the best new products, every day. It's a place for product-loving enthusiasts to share and geek out about the latest mobile apps, websites, hardware projects, and tech creations.</p>
// 				<button class="button_30e5c bigSize_8949a secondaryBoldText_ec36e secondaryText_97b90 orangeSolidColor_1132c solidVariant_0ef4d signup_9df8f" data-reactid="47">
// 					<div class="buttonContainer_b6eb3" data-reactid="48">Sign Up</div>
// 				</button>
// 			</div>
// 		<div class="kitty_7eed9" data-reactid="49">
// 		<img src="https://s3.producthunt.com/static/kitty_265x244%402x.png" data-reactid="50">
// 	</div>
// </div>
