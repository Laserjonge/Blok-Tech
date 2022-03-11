const express = require("express");
const {engine} = require("express-handlebars");
const PORT = process.env.PORT || 3000
// require("dotenv").config()
// const connectDB = require("./config/db")

const app = express()

connectDB();


app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

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


app.get("*", (req, res) => {
  res.send("404, niets gevonden...");
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});