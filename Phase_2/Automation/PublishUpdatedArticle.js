const axios = require("axios");
require("dotenv").config();


async function publishUpdatedArticle(id, content, references) {
  await axios.put(`${process.env.BACKEND_API}/${id}`, {
    content: content + "\n\nReferences:\n" + references.join("\n"),
    isUpdated: true
  });
}

module.exports = publishUpdatedArticle;
