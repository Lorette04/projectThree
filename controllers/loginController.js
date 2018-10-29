const db = require("../models");
const jwt = require("jsonwebtoken");
// const obj = {
//   // ...
// };
// module.exports = obj;

const login = {
  create: function(req, res) {
    db.UserModel.create(req.body);
  },
  findOne: function(req, res) {
    db.UserModel.findOne(req.body, function(data) {
      res.json(data);
    });
  },
  // axios.post("/login", decoded, verifyToken, (req, res) => {
  //   const token = localStorage.getItem("jwt");

  /*     verifyToken(token, "shhhhh", (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          res.json({
            message: "Post created...",
            authData
          });
        }
      });
    }); */
  // Verify token defined here
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
  } /* ,
  confirm: axios.post("/login", verifyToken, (req, res) => {
    res.json({
      message: "Post created...",
      authData
    });
  }) */
};
module.exports = login;
