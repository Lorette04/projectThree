const router = require("express").Router();
const createAcc = require("../../controllers/createAccController.js");

// Matches with "/api/user"

router
  .route("/")
  .get(createAcc.findOne)
  .post(createAcc.create);

/* axios
  .post("user/", {
    email: this.state.email,
    password: this.state.password
  })
  .then(res => {
    localStorage.setItem("cool-jwt", res.data);
    this.props.history.push("/Protected");
  }); */

// Matches with "/api/user/:id"
/* router
  .route("/:id")
  .get(createAcc.findById)
  .put(createAcc.update)
  .delete(createAcc.remove); */

module.exports = router;
