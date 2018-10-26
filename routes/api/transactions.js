const router = require("express").Router();
const transactionsController = require("../../controllers/transactionsController");

// Matches with "/api/budget"
router.route("/Overview")
  .get(transactionsController.findAll)
  .post(transactionsController.create);

  // Matches, updates, deletes "/api/transactions/:id"
router.route("/TransactionForm/:id")
  .get(transactionsController.findById)
  .put(transactionsController.update)
  .delete(transactionsController.remove);

  // Creates expense or income "/api/transactions"
router.route("/AddTransaction")
.get(transactionsController.findById)
.post(transactionsController.create)
.put(transactionsController.update)
.delete(transactionsController.remove);

// Matches with "/api/history"
router.route("/History")
  .get(transactionsController.findAll)
  .get(transactionsController.findById)

module.exports = router;
