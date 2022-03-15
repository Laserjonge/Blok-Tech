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
const user = require("./models/user");
const filter = require("./models/filter");
const { default: mongoose } = require("mongoose");
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
app.get("/", (req, res) => {
  user
    .find()
    .lean()
    .then((users) => {
      console.log(users);
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
  filter
    .insert()
    .lean()
    .then((filters) => {
      console.log(filter);
      res.render("home", {
        title: "Axeleration | Rijden doe je samen!",
        ifMenuItemActive: true,

        filters: filters,
      });
    });
});

app.post("/inloggen", (req, res) => {
  console.log(req.body);
  res.send(req.body);
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
