const reports = require("../model/userreport");

let addReport1 = async (req, res, mext) => {
  let { sampleId, haematology, glucometry, thyroid } = req.body;
  await reports.insertMany([
    {
      sampleId,
      haematology: {},
    },
  ]);
};
