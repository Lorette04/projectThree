const router = require("express").Router();
/* const userRoutes = require("./users");
const transactionRoutes = require("./transactions"); */
const createAccRoutes = require("./createAcc");
const getToken = require("./getToken");

// Controller?? routes
router.use("/createAcc", createAccRoutes);
router.use("/getToken", getToken);
/* router.use("/users", userRoutes);
router.use("/transactions", transactionRoutes); */

module.exports = router;
