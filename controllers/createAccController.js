const db = require("../models");
// const obj = {
//   // ...
// };
// module.exports = obj;
module.exports = {
  create: function(req, res) {
    db.UserModel.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
/*  create: function(req, res) {
    console.log("CREATE USER ACCOUNT ROUTE FOR POST HAS BEEN REACHED!");
    db.UserModel.create(req.body, function(err, small) {
      if (err) return handleError(err);
      console.log("HEY HEY HEY: a successful user account has been created");
    });
  }
}; */
/* module.exports = createAcc; */
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
