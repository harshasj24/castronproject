const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PatientModel = new Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  reports: [],
});

module.exports = mongoose.model("patient", PatientModel);
