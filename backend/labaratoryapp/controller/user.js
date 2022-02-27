const usersData = require("../model/userdata");
const bcrypt = require("bcryptjs");

let signup = async (req, res, next) => {
  let { fName, password, email, role } = req.body;
  try {
    const emailexists = await usersData.findOne({ email });
    if (emailexists) {
      res.json({
        error: true,
        message: "Email already Exists",
        data: null,
      });
    } else {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      await usersData.insertMany([
        {
          fName,
          email,
          password: hashedPassword,
          role,
        },
      ]);
      res.json({
        error: false,
        message: "Data posted sucessfully",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};
let login = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    const dataUser = await usersData.findOne({ email });
    if (dataUser) {
      let passmatch = await bcrypt.compare(password, dataUser.password);
      if (passmatch) {
        res.json({
          error: false,
          message: "login Sucessfull",
          data: null,
        });
      } else {
        res.json({
          error: true,
          message: "invalid password",
          data: null,
        });
      }
    } else {
      res.json({
        error: true,
        message: "Email dosenot exists",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signup,
  login,
};
