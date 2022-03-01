const express = require("express");
const router = express.Router();
const reports = require("../controller/reports");

router.post("/addreports", reports.addReport1);

router.get("/viewreports", reports.viewReports);

router.put("/updaterep", reports.updateUser);

router.get("/userSamples/:_id", reports.getOneUser);

module.exports = router;
