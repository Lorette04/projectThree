const db = require("../models");
const jwt = require("jsonwebtoken");
// const obj = {
//   // ...
// };
// module.exports = obj;

const createAcc = {
  create: function(req, res) {
    db.User.create(req.body);
  },
  findOne: function(req, res) {
    db.User.findOne(req.body).then(
      jwt.sign(
        {
          user
        },
        "secretkey",
        (err, token) => {
          res.json({
            token
          });
          let obj = {
            user,
            token
          };
          console.log(obj);
        }
        /*         dbModel => res.json(create).catch(err => res.status(422).json(err))
 */
      )
    );
  }
};
module.exports = createAcc;
/* app.post("/getToken", (req, res) => {
    // Mock user
    const user = {
      email: req.body.email,
      password: req.body.password
    }; */
// async method with a callback function and user is passed as a payload
/* jwt.sign(
  {
    user
  },
  "secretkey",
  (err, token) => {
    res.json({
      token
    });
  }
); */
// login route to get json web token
