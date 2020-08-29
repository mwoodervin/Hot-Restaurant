// Dependencies
// =============================================================
var express = require("express");

//Route Files
require("./Routes/apiRoutes")(app)
require("./Routes/htmldisplay")(app)

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });