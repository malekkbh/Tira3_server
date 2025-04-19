const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const Routes = require("./api/routes/Roter");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", Routes);

const mongooseLink = "mongodb+srv://malek:malek12345678@cluster0.kvw3h2y.mongodb.net/";

mongoose.connect(mongooseLink);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.get("/app", (req, res) => {
  res.status(200).json({
    batata: "red",
  });
});

module.exports = app;
