var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/restaurant/:pg", function (req, res) {
  res.render("restaurant.ejs", { pagenumber: req.params.pg });
});

app.get("/:restaurantname/:id", function (req, res) {
  res.render("foodItems.ejs", {
    restaurantName: req.params.restaurantname,
    restaurantId: req.params.id,
  });
});

app.get("/profile", function (req, res) {
  res.render("profile.ejs");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("SERVER STARTED");
});
