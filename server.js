// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create server
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

// HTML routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});



// LISTENER -- Starts server
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});