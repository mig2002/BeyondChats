const express = require("express");
const Article = require("../models/Article");

const router = express.Router();

// CREATE article
router.post("/", async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json({
      message: "Article created successfully",
      data: article
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE article
router.put("/:id", async (req, res) => {
  try {
    const updated = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({
      message: "Article updated successfully",
      data: updated
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE article
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Article.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({
      message: "Article deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
