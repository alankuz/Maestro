require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var Chatkit = require("@pusher/chatkit-server");
//Cross-origin resource sharing (CORS)
//allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
var cors = require("cors");
var bodyParser = require("body-parser");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;
var chatkit = new Chatkit.default({
  instanceLocator: "v1:us1:4e1ac126-523b-48b9-98fd-42488dbd7573",
  key: "42073586-f008-4265-8b25-b1a487092ac5:0xYJrqAV4etqNahg0pqMOUjAvc4dnJZMb0KVst5ZZXA="
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/users", function(req, res) {
  var username = req.body;
  chatkit
    .createUser({
      id: username,
      name: username
    })
    .then(function() {
      res.sendStatus(201);
    })
    .catch(function(err) {
      if (err.error === "services/chatkit/user_already_exists") {
        console.log("User already exists: ${username}");
        res.sendStatus(200);
      } else {
        res.status(err.status).json(err);
      }
    });
});
app.post("/authenticate", function(req, res) {
  var authData = chatkit.authenticate({
    userId: req.query.user_id
  });
  res.status(authData.status).send(authData.body);
});
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;