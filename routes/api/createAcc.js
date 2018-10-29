const router = require("express").Router();
const createAcc = require("../../controllers/createAccController.js");
const axios = require("axios");

// Matches with "/api/user"

router
  .route("/")
  .get(createAcc.findOne)
  .post(createAcc.create);

/* axios
  .post("/create", {
    email: userEmail,
    password: userPassword
  })
  .then(res => {
    console.log(res);
    console.log(token);
    console.log("hello hello");
    // jwt is stored in a key called jwt, res.data is the value of jwt (key value)
    localStorage.setItem("jwt", token);
    this.props.history.push("/login");
  }); */

// Matches with "/api/user/:id"
/* router
  .route("/:id")
  .get(createAcc.findById)
  .put(createAcc.update)
  .delete(createAcc.remove); */

module.exports = router;
