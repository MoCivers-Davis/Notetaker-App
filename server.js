const express = require("express");
const fs = require("fs");

const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

let db = require("./db/db.json");


////////////////////HTML///////////////////

app.get("/", function (req, res) {/////HOME PAGE
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (reg, res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
})

app.get("/api/notes", function (req, res) {/////GET API
    res.json(db);
});

app.post("api/notes", function (req, res) { /////POST API
    var newNote = req.body;

    console.log(newNote);

    notes.push(newNote);
    res.json(newNotes);
});


app.get("/notes", function (req, res) {////NOTES HOMEPAGE
    res.sendFile(path.join(__dirname, "public/notes.html"))
})


app.listen(PORT, function () {
    console.log("App listening on Port " + PORT);
})