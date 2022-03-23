/// //////////////////////////
// MONGOOSE IMPLEMENTATION //
/// //////////////////////////
const mongoose = require('mongoose');

/// //////////////////////
// DATABASE CONNECTION //
/// //////////////////////
const connectDB = () => {
  try {
    mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB - connected');
  } catch (err) {
    // THROWS ERROR WHEN SOMETHING GOES WRONG //
    console.log('error occurred while trying to connect to db:', err);
    throw err;
  }
};

module.exports = connectDB;
