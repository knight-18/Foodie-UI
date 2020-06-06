var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/restaurant/:pg", function (req, res) {
  var url =
    "https://knight-foodji.herokuapp.com/api/restaurant?pageNo=" +
    req.params.pg +
    "&size=10";

  request(
    {
      url: url,
      json: true,
    },

    function (error, response, body) {
      var ar = [];
      ar = body;

      res.render("restaurant.ejs", { list: ar });
    }
  );
});

app.get("/:restaurantname/:id/", function (req, res) {
  var url =
    "https://knight-foodji.herokuapp.com/api/restaurant/" + req.params.id;
  var rname = req.params.restaurantname;
  request(
    {
      url: url,
      json: true,
    },

    function (error, response, body) {
      var foodlist = [];
      foodlist = body;
      res.render("foodItems.ejs", {
        list: foodlist,
        restaurantName: rname,
      });
    }
  );
});

app.get("/profile", function (req, res) {
  res.render("profile.ejs");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("SERVER STARTED");
});
