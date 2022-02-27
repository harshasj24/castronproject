const usersData = require("../model/userdata");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findOne } = require("../model/userdata");
SCERET_KEY = "345Rtg#$";
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
      let { fName, role, email } = dataUser;
      let passmatch = await bcrypt.compare(password, dataUser.password);
      if (passmatch) {
        const payload = { fName, role };
        const token = await jwt.sign(payload, SCERET_KEY, {
          expiresIn: "8h",
        });
        res.json({
          error: false,
          message: "login Sucessfull",
          data: { fName, role, token },
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

let allUserDetails = async (req, res, next) => {
  try {
    let allData = await usersData.find({ role: "user" }).lean();
    res.json({
      error: false,
      message: "Data fetched sucessfully",
      data: allData,
    });
  } catch (err) {
    next(err);
  }
};

let getOneUser = async (req, res, next) => {
  let email = req.params.email;
  try {
    const oneUser = await usersData.findOne({ email }).lean();
    res.json({
      error: false,
      message: "Data find successfully",
      data: oneUser,
    });
  } catch (err) {
    next(err);
  }
};

let oneUserDetails = async (req, res, next) => {
  try {
    let myemail = req.params.email;
    let { fName, email, password } = req.body;
    let allData = await usersData.find({ email: myemail }).lean();

    await usersData.updateOne(
      { email: myemail },
      {
        fName,
        email,
        password,
      }
    );
    res.json({
      error: false,
      message: "Data fetched sucessfully",
      data: allData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signup,
  login,
  allUserDetails,
  oneUserDetails,
  getOneUser,
};
