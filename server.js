const express = require("express");
// require jwt package
var jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: "bar" }, "shhhhh");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/UserModel",
  { useNewUrlParser: true }
);

// verify a token symmetric - synchronous
var decoded = jwt.verify(token, "shhhhh");
console.log(decoded.foo); // bar
// STARTTTT
// json webtoken start
/* app.get("/api", (req, res) => {
  res.json({
    message: "test"
  });
});
 */
/* app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
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

/* app.post("/api/login", (req, res) => {
  const user = {
    email: "tarektest@yahoo.com",
    password: "pass"
  };
  jwt.sign({ user: user }, "secretkey", (err, token) => {
    res.json({
      token: token
    });
  });
}); */
// ENDDDD
/*   res.json({});
  const user = {
    email: "tarektest@yahoo.com",
    password: "pass"
  };
}); */

// api route that is protected
/* app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
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

/* app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
}); */

// Format of the token
// Authorization: Bearer <access_token>

// Verify token defined here
/* function verifyToken(req, res, next) {
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
}  */
// TODO next must save jwt in local storage

// Start the API server
app.listen(PORT, function() {
  // console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  console.log("app is listening on: " + PORT);
});
