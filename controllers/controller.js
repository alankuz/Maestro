var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var model = require("../models/mainModel.js");


// Export routes for server.js to use.
module.exports = router;
