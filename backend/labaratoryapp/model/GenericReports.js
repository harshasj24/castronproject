const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenericReportsModel = new Schema({
  testName: {
    type: String,
  },
  testId: {
    type: String,
    required: true,
  },
  testOutComes: [
    {
      outcomeTestName: String,
      outcomeTestValue: String,
    },
  ],
  testPrice: {
    type: Number,
    required: true,
  },
  lastModified: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("GenericReports", GenericReportsModel);
