
const axios = require("axios");
require("dotenv").config();

async function fetchArticles() {
  const response = await axios.get(process.env.BACKEND_API);
  return response.data.filter(a => !a.isUpdated);
}


module.exports = fetchArticles;
