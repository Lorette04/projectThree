const router = require("express").Router(); /* const userRoutes = require("./users");
const transactionRoutes = require("./transactions"); */
/* const UserModel = reuire("../api/");
 */
var jwt = require("jsonwebtoken"); /* router.use("/getToken", getToken);
 */ /* outer.use(
  "/createAcc",
  createAccRoutes
); */ /* const userModel = require("./users");
 */ // Controller?? routes
/* var token = jwt.sign({ foo: "bar" }, cert, { algorithm: "RS256" });
var cert = fs.readFileSync("private.key");
var fs = require("fs");
const createAccRoutes = require("./createAcc");
const getToken = require("./getToken");  */

router.get("/", (req, res) => {
  res.json({
    message: "welcome TEST"
  });
});
router.post("/posts", (req, res) => {
  // Mock user
  const user = {
    email: "tarektest@yahoo.com",
    password: "pass"
  };
  jwt.sign(
    {
      data: user
    },
    "secretkey",
    (err, token) => {
      res.json({
        token
      });
      console.log(token);
    }
  );
});
router.post("/api/posts", verifyToken, (req, res) => {
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
});
// Format of the token
// Authorization: Bearer <access_token>

// Verify token defined here
function verifyToken(req, res, next) {
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
module.exports = router; /* router.use("/users", userRoutes);
router.use("/transactions", transactionRoutes); */
/* router.use(
  "/user",
  userModel
);  */
/* module.exports = UserModel;
 */
/* router.use(
  "/api/create",
  jwt.sign({ foo: "bar" }, { algorithm: "RS256" }, function(err, token) {
    console.log(token);
  })
); */
/* router.post("/api/login", (req, res) => {
  console.log("Route Hit");
  // Mock user
  const user = {
    email: "tarektest@yahoo.com",
    password: "pass"
  }; */
// const user = {
//   email: req.body.email,
//   password: req.body.password
// };
// async method with a callback function and user is passed as a payload
/*   jwt.sign(
    {
      data: user
    },
    "secret",
    (err, token) => {
      res.json({
        token
      });
    }
  );
}); */
