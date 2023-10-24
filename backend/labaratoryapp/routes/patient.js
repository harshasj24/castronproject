const express = require("express");
const router = express.Router();
const { addPatent, dropPatientDB } = require("../controller/patient");

router.post("/add", addPatent);

router.delete("/dropDB", dropPatientDB);
module.exports = router;
