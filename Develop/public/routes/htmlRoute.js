const fs = require('fs');
const path = require('path');

// Export modules
module.exports = function(app) {

    // GET html route
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
});

}
