var db = require("../models");

module.exports = function(app) {
  // Get all students
  app.get("/api/students", function(req, res) {
    db.Student.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  // Get all steachers
  app.get("/api/teacher", function(req, res) {
    db.Teacher.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new document
  app.post("/api/document", function(req, res) {
    db.Document.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
