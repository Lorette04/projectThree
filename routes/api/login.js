const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/user"

router
  .route("/")
  .get(loginController.findOne)
  .post(loginController.create);
/*  .post(loginController.verifyToken); */

module.exports = router;
