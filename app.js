//////////////////
// REQUIREMENTS //
//////////////////
const express = require("express");
const { Router } = require("express");
const { engine } = require("express-handlebars");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const { request } = require("express");
const { default: mongoose } = require("mongoose");
const User = require("./models/Usergafsr");
const Filter = require("./models/Filter");
const { redirect } = require("express/lib/response");
const app = express();
connectDB();


/////////////////////////////// 
// REFERENCES TO THE FOLDERS //
///////////////////////////////
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));


////////////
///ROUTES///
////////////
app.get("/", async (req, res) => {

  const filter = await Filter.findOne().sort({_id: -1}).lean();
  // const filter = {
  //   vehicle: 'Auto',
  //   gender: 'vrouw',
  // };
  console.log(filter);
  User.find({ vehicle: filter.vehicle, gender: filter.gender }).lean().then((users) => {

    res.render("home", {
      title: "Axeleration | Rijden doe je samen!",
      ifMenuItemActive: true,

      users: users,
    });
  });
});


app.get("/chatten", (req, res) => {
  res.render("chats", {
    title: "Chatten | Axeleration",
  });
});

app.get("/settings", (req, res) => {
  res.render("settings", {
    title: "Instellingen | Axeleration",
  });
});

app.get("/inloggen", (req, res) => {
  Filter
    .insert()
    .lean()
    .then((filters) => {
      console.log(filters);
      res.render("home", {
        title: "Axeleration | Rijden doe je samen!",
        ifMenuItemActive: true,

        filters: filters,
      });
    });
});

app.post("/inloggen", async(req, res) => {
  console.log(req.body);
  // res.send(req.body);
  await Filter.create({
    vehicle: req.body.vehicle,
    gender: req.body.gender
  })

  res.redirect('/')
});

app.get("*", (req, res) => {
  res.send("404, niets gevonden...");
});


/////////////////////////////
// NEEDED TO FIND THE PORT //
/////////////////////////////
app.listen(PORT, () => {
  console.log("Example app listening on port ${PORT}");
});
