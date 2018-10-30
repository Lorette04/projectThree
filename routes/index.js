const router = require("express").Router();
const path = require("path");
const loginController = require("../controllers/loginController");
const createAcc = require("../controllers/createAccController");
const verifyTokenController = require("../controllers/verifyTokenController");

router.route("/api/create").post(createAcc.create);
// .post(createAcc.create);

router.route("/login").get(loginController.findOne);
// .post(loginController.create);

// jwt post request
router.post(
  "/create",
  verifyTokenController.verifyToken,
  loginController.findOne /* ,
  res.redirect("/login") */
);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
