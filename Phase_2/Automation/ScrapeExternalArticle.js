const axios = require("axios");
const { htmlToText } = require("html-to-text");

async function scrapeExternalArticle(url) {
  try {
    const response = await axios.get(url, {
      timeout: 5000
    });

    return htmlToText(response.data, { wordwrap: false });
  } catch (err) {
    console.warn("Skipping blocked URL:", url);
    return null;
  }
}

module.exports = scrapeExternalArticle;
