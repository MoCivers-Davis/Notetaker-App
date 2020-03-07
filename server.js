const express = require("express");
const fs = require("fs"); 

const path = require("path"); ///We don't really need this to make our app work

const app = express();  ////Makes Express start the app server
const PORT = process.env.PORT || 3000; ///The Port we will be running

//////////////////SET UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true }));//////This allows us to talk in JSON
app.use(express.json());

//app.use(epress.static("public"));
app.use(express.static('public'))

//////////FRIDAY ---------letdb = require("./db/db.json");

/////////////////TALKS TO THE HOME PAGE/////////////
app.get("/", function (req, res) { /////TAlks to the homepage////////
    res.sendFile(path.join(__dirname, "public/index.html"));
    //res.end("Welcome to my Note taking app");///This is just temporary to see if the app consoles this in the browser
});
///////////////FRIDAY ---------------- let db 
////////////////////////HTML//////////////////////////////////////////
app.get("/notes", function(req, res) {//We want to do another route to tie in the notes page.  Finish watching the 2nd video.
res.sendFile(path.join(__dirname, "public/notes.html"))
})
////////////////////////END OF ROUTES/////////////////////////////////////

//On DB JSON page we may need an array////I overheard the instructor telling this to Chris but I didn't hear the entire conversation.




////////////////////////////////////////////////////////
app.listen(PORT, function () {
    console.log("App listening on Port " + PORT);
})