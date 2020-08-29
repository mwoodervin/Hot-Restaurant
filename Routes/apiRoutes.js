var path = require("path")

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });