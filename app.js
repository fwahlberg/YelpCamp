var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
  {name: "Mountbatten", image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"}
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req,res){
  res.render("campgrounds", {campgrounds});
});

app.post("/campgrounds", function(req, res){
  //get data from form and add campground
  var name = req.body.name;
  var image = req.body.imageURL;
  var newCampground = {name, image};
  campgrounds.push(newCampground);
  //Redirect to campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});
app.listen(3000, function(){
  console.log("YelpCamp server started...");
});
