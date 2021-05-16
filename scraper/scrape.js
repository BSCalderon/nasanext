const express = require("express");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const cors = require("cors");
const app = express();
app.use(cors());
const url = "https://mars.nasa.gov/mars2020/weather/";
const newsHeadlines = [];

puppeteer
  .launch()
  .then((browser) => browser.newPage()) //new page from browser
  .then((page) => {
    return page.goto(url).then(function () {
      return page.content(); //return page html content
    });
  })
  .then((html) => {
    const $ = cheerio.load(html);
    $(".mb_table > tbody > tr").each(function () {
      newsHeadlines.push({
        // regexp inside of split method is used to
        // filter out large string of temperatures
        date: $(this).text().split(",")[0],
        maxTempF: $(this).text().split(" ").pop().substring(6).split("F")[0],
        minTempF: $(this)
          .text()
          .split(/(?<=\C)(.*?)(?=\F)/)[1],
        maxTempC: $(this)
          .text()
          .split(/(?<=\F)(.*?)(?=\C)/)[1],
        minTempC: $(this)
          .text()
          .split(/(?<=\F)(.*?)(?=\C)/)[3],
      });
    });

    console.log(newsHeadlines);
  })
  .catch(console.error);

app.get("/", function (req, res) {
  res.send(newsHeadlines);
});
app.listen("8080");
console.log("API is running on http://localhost:8080");
module.exports = app;
