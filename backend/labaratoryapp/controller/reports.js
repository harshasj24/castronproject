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
  let { _id, thyroid, glucometry, hemotology } = req.body;
  try {
    await reports.updateOne(
      { _id },
      {
        glucometry,
        hemotology,
        thyroid,
      }
    );
    res.json({
      error: false,
      message: "Data added sucessfully",
      data: null,
    });
  } catch {}
};

module.exports = {
  addReport1,
  viewReports,
  updateUser,
};
