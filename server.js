////All of my NPM packages
const express = require("express");
const fs = require("fs");
const path = require("path");

////////Setting Up Ports
const app = express();
const PORT = process.env.PORT || 3000;

////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
let notes = require("./db/db.json");

////////////////////////////////////////////////////
const OUTPUT_DIR = path.resolve(__dirname, "db")
const outputPath = path.join(OUTPUT_DIR, "db.json");


////////////////////HTML///////////////////
app.get("/", function (req, res) {/////HOME PAGE
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {////Notes Homepage
    res.sendFile(path.join(__dirname, "public/notes.html"));
})

var y = 1
///////////API//////////////////////////////////

app.get("/api/notes", function (req, res) {/////GET API
    res.json(notes);
});

app.post("/api/notes", function (req, res) { /////POST API
    var newNote = req.body;
    newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();
    newNote.id = y++
    notes.push(newNote);
    fs.writeFile(outputPath, JSON.stringify(notes), function (err) {
        if (err) {
            throw err
        }
    })

    console.log(newNote);

    //notes.push(newNote);
    res.json(newNote);
});

app.listen(PORT, function () {
    console.log("App listening on Port " + PORT);
})