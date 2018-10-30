const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.UserModel.create(req.body);
  },
  findOne: function(req, res, next) {
    db.UserModel.findOne(req.body, function(data) {
      // Get the auth header value
      const bearerHeader = req.headers["authorization"];
      // Check if bearer is undefined
      if (typeof bearerHeader !== "undefined") {
        // Split at the space
        const bearer = bearerHeader.split(" ");
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;

        //respond with data if verified
        res.json(data);

        // Call next middleware
        next();
      } else {
        // Forbidden
        res.sendStatus(403);
      }
    });
  }
};
