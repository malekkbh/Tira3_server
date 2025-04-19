const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const Routes = require("./api/routes/Routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", Routes);

const mongooseLink = "";

mongoose.connect(mongooseLink);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
  startCronLoopEvery24h();
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

module.exports = app;
