require("dotenv").config();

const fetchArticles = require("./FetchArticle");
const searchGoogle = require("./GoogleSearch");
const scrapeExternalArticle = require("./ScrapeExternalArticle");
const rewriteArticle = require("./LLMupdate");
const publishUpdatedArticle = require("./PublishUpdatedArticle");
const isValidArticleUrl = require("./utils/isValidArticleUrl");

(async () => {
  const articles = await fetchArticles();

  for (const article of articles) {
    try {
      const links = await searchGoogle(article.title);

      // filter blocked domains
      const validLinks = links.filter(isValidArticleUrl);

      if (validLinks.length < 2) {
        console.log("Not enough valid references for:", article.title);
        continue;
      }

      const refContents = [];

      for (const link of validLinks) {
        const content = await scrapeExternalArticle(link);
        if (content) refContents.push(content);
        if (refContents.length === 2) break;
      }

      if (refContents.length < 2) {
        console.log("Could not scrape enough references for:", article.title);
        continue;
      }

      const updatedContent = await rewriteArticle(
        article.title,
        refContents[0],
        refContents[1]
      );

      await publishUpdatedArticle(article._id, updatedContent, validLinks);

      console.log("Updated:", article.title);
    } catch (err) {
      console.error("Failed article:", article.title);
    }
  }

  process.exit(0);
})();
