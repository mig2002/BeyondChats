require("dotenv").config();
const axios = require("axios");


async function searchGoogle(query) {
  const response = await axios.get("https://serpapi.com/search.json", {
    params: {
      q: query,
      engine: "google",
      api_key: process.env.SERP_API_KEY,
      num: 2
    }
  });

  return (response.data.organic_results || [])
    .slice(0, 2)
    .map(r => r.link);
}

module.exports = searchGoogle;
