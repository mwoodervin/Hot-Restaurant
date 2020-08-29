var tableList = require("../data/Tablelist");
var waitlist = require("../data/Waitlist");

module.exports = function(app) {

  app.get("/reservation", function(req, res) {
    res.json(waitlist)
  });

  app.get("/tables", function(req, res) {
    res.json(tableList)
  });

    app.post("/api/tables", function (req,res) {
    
    });
}