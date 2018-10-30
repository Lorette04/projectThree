const express = require("express");
// var jwt = require("jsonwebtoken");
// var token = jwt.sign({ foo: "bar" }, "shhhhh");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const verifyTokenController = require("./controllers/verifyTokenController");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

/* // // jwt post request
app.post("/create", verifyTokenController.verifyToken); */

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/seedtransactionlist",
  { useNewUrlParser: true }
);

// verify a token symmetric - synchronous
/* var decoded = jwt.verify(token, "shhhhh");
console.log(decoded.foo); // bar */

// Start the API server
app.listen(PORT, function() {
  // console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  console.log("app is listening on: " + PORT);
});
