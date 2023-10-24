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
      res.status(401).json({
        error: true,
        message: "Email already Exists",
        data: null,
      });
    } else {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      let user = await usersData.create([
        {
          fName,
          email,
          password: hashedPassword,
          role,
        },
      ]);
      res.status(200).json({
        error: false,
        message: "Data posted sucessfully",
        data: user,
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
      let { _id, fName, role, email } = dataUser;
      let passmatch = await bcrypt.compare(password, dataUser.password);
      if (passmatch) {
        const payload = { email, role };
        const token = await jwt.sign(payload, SCERET_KEY, {
          expiresIn: "8h",
        });
        res.status(200).json({
          error: false,
          message: "login Sucessfull",
          data: { email, fName, role, token },
        });
      } else {
        res.status(401).json({
          error: true,
          message: "invalid password",
          data: null,
        });
      }
    } else {
      res.status(404).json({
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
    let allData = await usersData.find().lean();
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
    const oneUser = await usersData.findOne({ email: email }).lean();
    res.json({
      error: false,
      message: "Data find successfully",
      data: oneUser,
    });
  } catch (err) {
    next(err);
  }
};

// let oneUserDetails = async (req, res, next) => {
//   try {
//     let myemail = req.params.email;
//     let { fName, email, password } = req.body;
//     let allData = await usersData.find({ email: myemail }).lean();

//     await usersData.updateOne(
//       { email: myemail },
//       {
//         fName,
//         email,
//         password,
//       }
//     );
//     res.json({
//       error: false,
//       message: "Data fetched sucessfully",
//       data: allData,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

let updateUser = async (req, res, next) => {
  let { fName, email, password } = req.body;
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    await usersData.updateOne(
      { email: email },
      {
        fName,
        password: hashedPassword,
      }
    );
    res.json({
      error: false,
      message: "Data fetched sucessfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signup,
  login,
  allUserDetails,

  getOneUser,
  updateUser,
};
