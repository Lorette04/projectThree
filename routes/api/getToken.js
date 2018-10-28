const router = require("express").Router();
const getToken = require("../../controllers/getTokenController.js");

// Matches with "/api/user"
/* router
  .route("/")
  .get(getToken.findAll)
  .post(getToken.create); */

/* router
  .route("/")
  /*   .get(getToken.findAll)
  .post(getToken.verify); 

router
  .route("/:id")
  .get(getToken.findById)
  .put(getToken.update)
  .delete(getToken.remove); */

module.exports = router;
