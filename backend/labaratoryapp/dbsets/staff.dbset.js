const { errorResponse, successResponse } = require("../messages");
const staffModel = require("../model/staff");

class StaffDBSet {
  async getAllStaff() {
    try {
      return await staffModel.find().lean();
    } catch (error) {
      throw new Error(error);
    }
  }
  async createStaff(staff) {
    try {
      await staffModel.insertMany([staff]);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new StaffDBSet();
