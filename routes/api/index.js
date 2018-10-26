const router = require("express").Router();
/* const userRoutes = require("./users");
const transactionRoutes = require("./transactions"); */
const createAccRoutes = require("./createAcc");
const getToken = require("./getToken");

// Controller?? routes
routeer.use("/createAcc", createAccRoutes);
routeer.use("/getToken", getToken);
/* router.use("/users", userRoutes);
router.use("/transactions", transactionRoutes); */

module.exports = router;
