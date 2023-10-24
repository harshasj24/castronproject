const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const cors = require("cors");
const patientRouter = require("./routes/patient");
const reportRouter = require("./routes/report");
const reportsRouter = require("./routes/GenericReportsRoutes");
const adminRouter=require('./routes/admin');
const dbUrl =
  "mongodb+srv://Harsha_sj:harsha@cluster0.3ba50.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {}, (err) => {
  if (!err) {
    console.log("Database Connected Sucessfully");
  } else {
    console.log(err);
    console.log("failed to connect to Database");
  }
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

app.get("/error", (req, res) => {
  res.status(401).send("some thing went wrong");
});
app.use("/labs", userRouter);

app.use("/reports", reportRouter);
app.use("/patient", patientRouter);
app.use("/report", reportsRouter);
app.use("/admin",adminRouter)

module.exports = app;
