// Require dependencies
const fs = require('fs');
const db = require('../db/db.json');

// get API routes
module.exports = function(app) {
    
app.get("/api/notes", function(req, res) {
    res.json();
});

// post api routes
app.post("/api/notes", function(req, res) {
    console.log(req.body);
    var newNote = {

    }
})
}
