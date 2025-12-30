const axios = require("axios");
require("dotenv").config();

async function publishUpdatedArticle(id, updatedContent, references) {
  const finalContent =
    updatedContent +
    "\n\nReferences:\n" +
    references.join("\n");

  await axios.put(`${process.env.BACKEND_API}/${id}`, {
    content: finalContent,
    isUpdated: true
  });
}

module.exports = publishUpdatedArticle;
