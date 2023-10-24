const GenericReportsModel = require("../model/GenericReports");
const createReportId = (testName, reportsTotalLength) => {
  return `Test${testName.slice(0, 3)}${reportsTotalLength}`.toUpperCase();
};

const { successResponse, errorResponse } = require("../messages");

const createNewTest = async (req, res, next) => {
  try {
    const requestData = req.body;
    const allReports = await GenericReportsModel.find().lean();
    const testId = createReportId(
      requestData.testName,
      allReports.length + 0o1
    );
    const newReport = { ...requestData, testId, lastModified: new Date() };
    await GenericReportsModel.insertMany([newReport]);
    res
      .status(200)
      .json(successResponse("New Test Created Succesfully", newReport));
  } catch (error) {
    res
      .status(200)
      .json(errorResponse("something went wrong, Failed to create New Test"));
  }
};

const getAllTests = async (req, res, next) => {
  try {
    console.log("called");
    const allReports = await GenericReportsModel.find().lean();
    res.status(200).json(successResponse("fetched Succesfully", allReports));
  } catch (error) {
    res
      .status(400)
      .json(errorResponse("something went wrong, Failed to fetch Tests"));
  }
};
const dropReportstDB = async (req, res, next) => {
  try {
    await GenericReportsModel.deleteMany();
    const reportsData = await GenericReportsModel.find().lean();
    if (reportsData && reportsData.length <= 0) {
      res.status(200).json(successResponse("Drop DB Succesfully", reportsData));
      return;
    }
    res.status(400).json(errorResponse("Droping DB failed"));
  } catch (error) {
    res.status(400).json(errorResponse("Droping DB failed"));
  }
};
module.exports = { createNewTest, getAllTests, dropReportstDB };
