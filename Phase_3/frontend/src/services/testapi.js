import { fetchArticles } from "./api.js";

(async () => {
  try {
    console.log("Calling API...");
    const response = await fetchArticles();
    console.log("Status:", response.status);
    console.log("Data:", response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
