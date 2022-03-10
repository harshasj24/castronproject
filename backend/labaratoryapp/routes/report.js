const express = require("express");
const router = express.Router();
const reports = require("../controller/reports");

const auth=require("../middlewares/auth")

router.post("/addreports",auth.authorizedAdmin, reports.addReport1);

router.get("/viewreports",auth.authorizedAdmin, reports.viewReports);

router.put("/updaterep", auth.authorizedAdmin,reports.updateUser);

router.get("/userSamples/:email",auth.userAuthorization, reports.getOneUser);

module.exports = router;
