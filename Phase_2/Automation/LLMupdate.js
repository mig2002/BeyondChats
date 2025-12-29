require("dotenv").config();
const axios = require("axios");

async function rewriteArticle(title, ref1, ref2) {
  const prompt = `
Rewrite the article titled "${title}".
Improve clarity, structure, and readability.
Do not copy text directly.
Use references only for guidance.

Reference 1:
${ref1}

Reference 2:
${ref2}
`;

  const response = await axios.post(
    "https://router.huggingface.co/v1/chat/completions",
    {
      model: "meta-llama/Meta-Llama-3-8B-Instruct",
      messages: [
        { role: "user", content: prompt }
      ],
      temperature: 0.7
    },
    {
      headers: {
        "Authorization": `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json"
      },
      timeout: 60000
    }
  );

  return response.data.choices[0].message.content;
}

module.exports = rewriteArticle;
