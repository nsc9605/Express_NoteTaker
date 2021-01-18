// Require dependencies
const notesData = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// get API route request
module.exports = function (app) {
  app.get("/api/", function (req, res) {
    res.json(index);
  });

  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });

  // post api routes
  app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    newNote.id = uuidv4();
    notesData.push(newNote);
    res.json(newNote);
  });

  // Delete notes
  app.delete("/api/notes/:id", function (req, res) {
    var idToDelete = req.params.id;
    console.log(req.params.id);
    for (var i = 0; i < notesData.length; i++) {
      if (idToDelete == notesData[i].id) {
        notesData.splice(i, 1)
      }
    }
    res.send("works");
  });
};
