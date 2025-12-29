require("dotenv").config();

const fetchArticles = require("./FetchArticle");
const searchGoogle = require("./GoogleSearch");
const scrapeExternalArticle = require("./ScrapeExternalArticle");
const rewriteArticle = require("./LLMupdate");
const publishUpdatedArticle = require("./PublishUpdatedArticle");

(async () => {
  const articles = await fetchArticles();

  for (let article of articles) {
    const links = await searchGoogle(article.title);
    if (links.length < 2) continue;

    const ref1 = await scrapeExternalArticle(links[0]);
    const ref2 = await scrapeExternalArticle(links[1]);

    const updatedContent = await rewriteArticle(
      article.title,
      ref1,
      ref2
    );

    await publishUpdatedArticle(article._id, updatedContent, links);

    console.log("Updated:", article.title);
  }

  process.exit(0);
})();
