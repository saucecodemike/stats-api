const express = require("express");
const router = express.Router();
const PopChar = require("../models/PopChar");

// Get back all the posts
router.get("/", async (req, res) => {
  try {
    const popChars = await PopChar.find();
    res.json(popChars);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:ethnicValue", async (req, res) => {
  try {
    const popChars = await PopChar.find({
      ethnicValue: req.params.ethnicValue,
    });
    res.json(popChars);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:ethnicValue/total", async (req, res) => {
  try {
    const popChars = await PopChar.find({
      ethnicValue: req.params.ethnicValue,
      birthCode: "total",
    });
    res.json(popChars);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:ethnicValue/total/:year", async (req, res) => {
  try {
    const popChars = await PopChar.find({
      ethnicValue: req.params.ethnicValue,
      birthCode: "total",
      year: req.params.year,
    });
    res.json(popChars);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
