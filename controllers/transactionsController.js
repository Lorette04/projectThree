const db = require("../models");

// Defining methods for the budgetController
module.exports = {
  findAll: function(req, res) {
    console.log(' ', req.body);
    db.UserModel
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel) 
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findIncome: function(req, res) {
    db.UserModel
      .findIncome(req.params.default)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.UserModel
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.UserModel
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.UserModel
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
