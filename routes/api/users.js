const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/"
router.route("/Login")

  .get(userController.findById)
 
  .post(userController.create);

// Matches, updates, deletes "/api/:id"
router
  .route("/Login/:id")
  .get(userController.findById)
 
  .delete(userController.remove);


module.exports = router;
