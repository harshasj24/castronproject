const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

const auth = require("../middlewares/auth");

router.get("/alldata", auth.authorizedAdmin, userController.allUserDetails);

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get("/oneUserdetails/:email", userController.getOneUser);

router.put("/updateuser", auth.authorizedAdmin, userController.updateUser);

module.exports = router;
