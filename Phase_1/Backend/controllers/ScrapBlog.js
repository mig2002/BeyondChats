const axios = require("axios");
const Article = require("../models/Article");
const { htmlToText } = require("html-to-text");

async function scrapeOldestBlogs() {
  const response = await axios.get(
    "https://beyondchats.com/wp-json/wp/v2/posts",
    {
      params: {
        per_page: 5,
        order: "asc"
      }
    }
  );

  const articles = response.data.map(post => {
    const cleanText = htmlToText(post.content.rendered, {
      wordwrap: false
    });

    return {
      title: post.title.rendered,
      link: post.link,
      originalContent: cleanText,
      content: cleanText,
      isUpdated: false
    };
  });

  for (const article of articles) {
    await Article.updateOne(
      { link: article.link },
      { $setOnInsert: article },
      { upsert: true }
    );
  }

  return articles;
}

module.exports = scrapeOldestBlogs;
