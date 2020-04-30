const mongoose = require("mongoose");

const ethnicHierarchySchema = mongoose.Schema({
  ethnicLevel: {
    type: String,
  },
  ethnicValue: {
    type: String,
  },
  birthCode: {
    type: String,
  },
  count: {
    type: String,
  },
  percentage: {
    type: String,
  },
  year: {
    type: String,
  },
});

module.exports = mongoose.model(
  "ethnicHierarchy",
  ethnicHierarchySchema,
  "ethnicHierarchy"
);
