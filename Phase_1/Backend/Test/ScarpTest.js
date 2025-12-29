const scrapeOldestBlogs = require("../controllers/ScrapBlog");

(async () => {
  const articles = await scrapeOldestBlogs();
  console.log("RESULT:", articles);
})();
