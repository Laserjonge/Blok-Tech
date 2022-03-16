//////////////////
// FILTER MODEL //
//////////////////
const mongoose = require("mongoose");

const filterSchema = new mongoose.Schema({
  vehicle: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const filter = mongoose.model("filter-form", filterSchema);

module.exports = filter;
