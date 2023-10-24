const bcrypt = require("bcryptjs");
const { successResponse, errorResponse } = require("../messages");
const PatientModel = require("../model/patient");
const { makePassword } = require("../configs/hashers");
require("dotenv").config();

const generateSeralNo = (totalUsers) => {
  if (totalUsers.toString().length <= 4) {
    const prefixZeros = "0000";
    return prefixZeros.slice(0, prefixZeros.length - totalUsers) + totalUsers;
  }
  return totalUsers;
};
const addPatent = async (req, res, next) => {
  try {
    const date = new Date();
    const requestData = req.body;
    const totalLength = (await PatientModel.find().lean()).length;
    const patientId = `${date
      .getFullYear()
      .toString()
      .slice(-2)}${requestData.fName.slice(0, 3)}${generateSeralNo(
      totalLength + 1
    )}`.toUpperCase();
    const newPatient = {
      ...requestData,
      patientId,
      role: process.env["ROLE_PATIENT"],
      dob: new Date(requestData.dob),
    };
    await PatientModel.insertMany([newPatient]);
    res
      .status(200)
      .json(successResponse("Patient added successfuly", newPatient));

      PatientModel.updateOne({patientId:''},{$push:{}})
  } catch (error) {
    res.status(400).json(errorResponse());
  }
};

const dropPatientDB = async (req, res, next) => {
  try {
    await PatientModel.deleteMany();
    const patientData = await PatientModel.find().lean();
    if (patientData && patientData.length <= 0) {
      res.status(200).json(successResponse("Drop DB Succesfully", patientData));
      return;
    }
    res.status(400).json(errorResponse("Droping DB failed"));
  } catch (error) {
    res.status(400).json(errorResponse("Droping DB failed"));
  }
};
module.exports = {
  addPatent,
  dropPatientDB,
};
