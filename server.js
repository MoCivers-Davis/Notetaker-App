var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "public/index.html"));
    //res.end("Welcome to my Note taking app");///This is just temporary to see if the app consoles this in the browser
});









////////////////////////////////////////////////////////
app.listen(PORT,function() {
    console.log("App listening on Port" +PORT);
  })