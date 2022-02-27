const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/msg", (req, res) => {
  res.json({
    error: false,
    message: "sucess",
    data: null,
  });
});

router.get("/alldata", userController.allUserDetails);

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get("/oneUserdetails/:email", userController.getOneUser);

module.exports = router;
