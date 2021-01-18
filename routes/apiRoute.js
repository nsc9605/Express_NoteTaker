// Require dependencies
const fs = require("fs");
const notesData = require("../db/db");
const { v4: uuidv4 } = require("uuid");

// get API routes
module.exports = function (app) {

  app.get("/api/", function (req, res) {
    res.json(index);
  });

  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  })

  // post api routes
  app.post("/api/notes", function (req, res) {
    let noteId = uuid();
    var newNote = req.body;
    newNote.id = uuidv4();
    notesData.push(newNote);
    res.json(newNote);

  });
  
  // Delete notes
  app.delete("/api/notes", function (req, res) {

  })
};
