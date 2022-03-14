const { Router } = require("express");
const express = require("express");
const {engine} = require("express-handlebars");
const PORT = process.env.PORT || 3000
require("dotenv").config()
const connectDB = require("./config/db")
const bodyParser = require("body-parser");
const { request } = require("express");
const User = require("./models/User");

const app = express()

connectDB();


app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + "/static"));


//Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Axeleration | Rijden doe je samen!",
    ifMenuItemActive: true
  });
});


app.get("/chatten", (req, res) => {
  res.render("chats", {
    title: "Chatten | Axeleration"
  });
});

app.get("/settings", (req, res) => {
  res.render("settings", {
    title: "Instellingen | Axeleration"
  });
});

app.post ("/inloggen", (req, res) => {
  console.log (req.body)
  res.send (req.body)
})

app.get('/users',(req,res) => {
  User.find().lean().then(users => {

    console.log(users);


    res.render('users', {
      users:users,
    });
  })
} )


app.get("*", (req, res) => {
  res.send("404, niets gevonden...");
});




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});