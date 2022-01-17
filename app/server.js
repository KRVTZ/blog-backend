//imports
const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes.js");
const admin_routes = require("./admin_routes.js");
const data_routes = require("./data_routes.js");
const post_routes = require("./post_routes.js");
const setting_routes = require("./setting_routes.js");
const user_routes = require("./user_routes.js");
const mongoose = require("mongoose");
const dbconnection = require("../database/db");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/", routes);
app.use("/", admin_routes);
app.use("/", data_routes);
app.use("/", post_routes);
app.use("/", setting_routes);
app.use("/", user_routes);
//static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/assets/fonts", express.static(__dirname + "public/assets/fonts"));
app.use("/assets/images", express.static(__dirname + "public/assets/images"));

// Template engine
app.set("view engine", "ejs");
//set views
app.set("views", "./assets/views");

//listen on port 3000
app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.info(`Listening on port ${port}`);
});
