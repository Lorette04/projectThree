/* const db = require("../models");
 */
(module.exports = {
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}),
  /* app.post("/getToken", (req, res) => {
    // Mock user
    const user = {
      email: req.body.email,
      password: req.body.password
    }; */
  // async method with a callback function and user is passed as a payload
  jwt.sign(
    {
      user
    },
    "secretkey",
    (err, token) => {
      res.json({
        token
      });
    }
  );
// login route to get json web token
