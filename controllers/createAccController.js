const db = require("../models");
const jwt = require("jsonwebtoken");
// const obj = {
//   // ...
// };
// module.exports = obj;

const createAcc = {
  create: function(req, res) {
    db.UserModel.create(req.body);
  },
  findOne: function(req, res) {
    db.UserModel.findOne(req.body, function(data) {
      res.json(data);
    });
  }
};
module.exports = createAcc;
/* app.post("/create", (req, res) => {
  // Mock user
  const user = {
    email: req.body.email,
    password: req.body.password
  };
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
}); */
// login route to get json web token
