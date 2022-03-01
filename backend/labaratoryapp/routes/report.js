const express = require("express");
const router = express.Router();
const reports = require("../controller/reports");

router.post("/addreports", reports.addReport1);

router.get("/viewreports", reports.viewReports);

router.put("/updaterep", reports.updateUser);



module.exports = router;
