const bcrypt = require("bcryptjs");
const saltRounds = 10;
const secreatKey = process.env["SECREAT_KEY"];
require("dotenv").config();
const makePassword = async (password) => {
  const salt = bcrypt.genSalt(saltRounds);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

const checkPassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

module.exports = {
  makePassword,
  checkPassword,
};
