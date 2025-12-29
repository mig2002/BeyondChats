require("dotenv").config();
const connectDB = require("./config/db");
const scrapeOldestBlogs = require("./controllers/ScrapBlog");

(async () => {
  try {
    // Database connection
    await connectDB();

    // Fetch articles
    const articles = await scrapeOldestBlogs();

    console.log(`Saved ${articles.length} articles successfully`);
  } catch (error) {
    console.error("Error while seeding blogs:", error.message);
  } finally {
    
    process.exit(0);
  }
})();
