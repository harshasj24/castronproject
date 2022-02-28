const reports = require("../model/userreport");
const usersData = require("../model/userdata");

let addReport1 = async (req, res, next) => {
  let { _id, date, fName, sampleId, haematology, glucometry, thyroid } =
    req.body;
  try {
    const isPatient = await usersData.findOne({ _id }).lean();
    if (isPatient) {
      let { email } = isPatient;

      await reports.insertMany([
        {
          date,
          fName: isPatient.fName,
          email: email,
          sampleId,
          haematology,
          glucometry,
          thyroid,
        },
      ]);

      res.json({
        error: false,
        message: "Data added sucessfully",
        data: null,
      });
    } else {
      res.json({
        error: true,
        message: "Please register the patient",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

let viewReports = async (req, res, next) => {
  try {
    const allData = await reports.find().lean();
    res.json({
      data: allData,
    });
  } catch (err) {
    next(err);
  }
};

let updateUser = async (req, res, next) => {
  let { fName, thyroid, glucometry, hemotology } = req.body;
  try {
    await reports.updateOne(
      { fName },
      {
        glucometry,
        hemotology,
      }
    );
    res.json({
      error: false,
      message: "Data added sucessfully",
      data: null,
    });
  } catch {}
};

let getReports = async (req, res, next) => {
  let _id = req.params._id;
  const reportData = await reports.findOne({ _id }).lean();
  try {
    res.json({
      error: false,
      message: "data fetched ff Sucessfully",
      data: reportData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addReport1,
  viewReports,
  updateUser,
  getReports,
};
