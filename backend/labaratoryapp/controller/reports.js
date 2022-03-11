const reports = require("../model/userreport");
const usersData = require("../model/userdata");

let addReport1 = async (req, res, next) => {
  let { _id, fName, sampleId, haematology, glucometry, thyroid } =
    req.body;
  try {
    const isPatient = await usersData.findOne({ _id }).lean();
    if (isPatient) {
      let { email } = isPatient;

      newDate=new Date();

      await reports.insertMany([
        {
          date:newDate,
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
  let { _id, thyroid, glucometry, haematology } = req.body;
  try {
    await reports.updateOne(
      { _id },
      {
        glucometry,
        haematology,
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

let getOneUser = async (req, res, next) => {
  try {
    let memail = req.params.email;
   
   
    const myEmail = await usersData
      .findOne({ email:memail }, { email: 1, _id: 0 })
      .lean();
      
    let { email } = myEmail;
    const report = await reports.find({ email:email }).lean();
   
    res.json({
      error: false,
      message: "Scuessfully fetched data",
      data: report,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  addReport1,
  viewReports,
  updateUser,
  getOneUser,
};
