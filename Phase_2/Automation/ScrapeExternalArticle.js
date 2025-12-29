const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeExternalArticle(url) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  let content = "";

  $("p").each((_, el) => {
    const text = $(el).text().trim();
    if (text.length > 50) {
      content += text + "\n";
    }
  });

  return content.slice(0, 3000);
}

module.exports = scrapeExternalArticle;
