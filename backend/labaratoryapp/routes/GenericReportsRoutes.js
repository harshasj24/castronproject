const expres = require("express");
const router = expres.Router();
const {
  createNewTest,
  getAllTests,
  dropReportstDB,
} = require("../controller/GenericReportsController");
router.get("/test/getAll", getAllTests);
router.post("/test/new", createNewTest);
router.delete("/dropDB", dropReportstDB);
module.exports = router;
