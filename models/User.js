/////////////////
// USERS MODEL //
/////////////////
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  pad: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
