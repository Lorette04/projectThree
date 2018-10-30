// const db = require("../models");
// const jwt = require("jsonwebtoken");

const verifyToken = {
  verifyToken: function(req, res, next) {
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
      // Call next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
};

module.exports = verifyToken;
