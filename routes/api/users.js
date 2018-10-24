const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/"
router.route("/")
  .get(userController.findAll)
  .get(userController.findById)
  .put(userController.update)
  .post(userController.create);

// Matches, updates, deletes "/api/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


module.exports = router;
