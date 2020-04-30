const mongoose = require("mongoose");

const ethnicHierarchySchema = mongoose.Schema({
  Code: {
    type: String,
  },
  ParentCode: {
    type: String,
  },
  EthnicLevel: {
    type: String,
  },
  EthnicValue: {
    type: String,
  },
  Active: {
    type: String,
  },
});

module.exports = mongoose.model(
  "ethnicHierarchy",
  ethnicHierarchySchema,
  "ethnicHierarchy"
);
