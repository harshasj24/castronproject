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

router.post("/signup", userController.signup);

router.post("/login", userController.login);

module.exports = router;
