const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const url = 'https://mars.nasa.gov/mars2020/weather/';

      puppeteer
      .launch()
      .then(browser => browser.newPage()) //new page from browser
      .then(page => {
        return page.goto(url).then(function() {
          return page.content(); //return page html content
        });
      })
      .then(html => {
        const $ = cheerio.load(html);
        const newsHeadlines = [];
        $('.mb_table > tbody > tr').each(function() {
          newsHeadlines.push({
            title: $(this).text(),
          });
        });
    
        console.log(newsHeadlines);
      })
      .catch(console.error);
