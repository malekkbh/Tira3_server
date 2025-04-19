const { Schema, model } = require("mongoose");

const USER_SCHEMA = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: String,
  ID: String,
  user_lvl: {
    type: String,
    enum: ["admin", "user", "inactive"],
    default: "user",
  },
});

const USER_MODEL = model("user", USER_SCHEMA);

module.exports = USER_MODEL;
