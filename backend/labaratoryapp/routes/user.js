const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/alldata", userController.allUserDetails);

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get("/oneUserdetails/:email", userController.getOneUser);

router.put("/updateuser", userController.updateUser);

module.exports = router;
