function isValidArticleUrl(url) {
  const blockedDomains = [
    "amazon.",
    "flipkart.",
    "ebay.",
    "myntra.",
    "aliexpress."
  ];

  return !blockedDomains.some(domain => url.includes(domain));
}

module.exports = isValidArticleUrl;
