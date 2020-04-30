const express = require("express");
const router = express.Router();
const ethnicHierarchy = require("../models/ethnicHierarchy");

// Get back all the posts
router.get("/ethnicvalues", async (req, res) => {
  try {
    const ethnicHierarchies = await ethnicHierarchy.find();
    res.json(ethnicHierarchies);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
