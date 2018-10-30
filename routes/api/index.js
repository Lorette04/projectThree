const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const transactionRoutes = require("./transactions");

// Book/User/Transaction routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/transactions", transactionRoutes);

module.exports = router;
