// Dependencies
const express = require("express");

// Create server
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

// Require route files for server to respond to user requests
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

// LISTENER -- Starts server
app.listen(PORT, function () {
  console.log("App is listening on PORT: " + PORT);
});
