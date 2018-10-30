const router = require("express").Router();
const transactionsController = require("../../controllers/transactionsController");

// Matches with "/api/budget"
router.route("/Overview")
  .get(transactionsController.findAll)
  .post(transactionsController.create);

  // Matches, updates, deletes "/api/transactions/:id"
router.route("/TransactionForm/:id")

  .put(transactionsController.update)
  .delete(transactionsController.remove);

  // Creates expense or income "/api/transactions"
router.route("/AddTransaction")

.post(transactionsController.create)
.put(transactionsController.update)
.delete(transactionsController.remove);

// Matches with "/api/history"
router.route("/History")
  .get(transactionsController.findAll)


module.exports = router;
