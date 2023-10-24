const { generateId } = require("../configs/utility-functions");
const { errorResponse, successResponse } = require("../messages");
const staffModel = require("../model/staff");
const staffDbSet = require("../dbsets/staff.dbset");
const logger = require("../config/logger");
const createStaff = async (req, res, next) => {
  try {
    const data= req.body
    const allStaff = await staffModel.find().lean();
    
    const staffId = generateId(data.fName, allStaff.length);
    const newStaff = { ...data, staffId, isActive: false,createdDate: new Date(),createdBy:'admin' };
    await staffDbSet.createStaff(newStaff, res);
    res.status(200).json(successResponse("Suceccess", newStaff));
  } catch (error) {
    console.log(error)
    res.status(400).json(errorResponse());
  }
};

const getAllStaff = async (req, res, next) => {
  try {
    const allStaff = await staffDbSet.getAllStaff();
    return res.status(200).json(successResponse("Suceccess", allStaff));
  } catch (error) {
    res.status(400).json(errorResponse());
  }
};

module.exports={createStaff,getAllStaff}