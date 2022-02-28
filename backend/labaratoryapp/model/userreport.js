const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersReportsSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  sampleId: {
    type: Number,
    required: true,
  },
  haematology: [
    {
      hemoglobin: {
        type: String,
        required: true,
      },
      neutrophils: {
        type: String,
        required: true,
      },
      eosinophiles: {
        type: String,
        required: true,
      },
      basophills: {
        type: String,
        required: true,
      },
      pavkedCellVolume: {
        type: String,
        required: true,
      },
      totalCount: {
        type: String,
        required: true,
      },
      lymphocytes: {
        type: String,
        required: true,
      },
      monocytes: {
        type: String,
        required: true,
      },
      redBloodCells: {
        type: String,
        required: true,
      },
      mvc: {
        type: String,
        required: true,
      },
    },
  ],
  glucometry: [
    {
      fastingbloodsugar: {
        type: String,
        required: true,
      },
      postprandilabloodsugar: {
        type: String,
        required: true,
      },
      hba1c: {
        type: String,
        required: true,
      },
      calcium: {
        type: String,
        required: true,
      },
    },
  ],

  thyroid: [
    {
      t3Total: {
        required: true,
        type: String,
      },
      thyroxine: {
        type: String,
        required: true,
      },
      tsh: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("reports", usersReportsSchema);
