const axios = require("axios");
const Article = require("../models/Article");

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

  const articles = response.data.map(post => ({
    title: post.title.rendered,
    link: post.link
  }));

  for (let article of articles) {
    await Article.updateOne(
      { link: article.link },
      { $setOnInsert: article },
      { upsert: true }
    );
  }

  return articles;
}

module.exports = scrapeOldestBlogs;
