const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Transactions collection and inserts the transaction below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/seedtransactionlist"
);

const transactionSeed = [
  {
    name: "Jane Cake",
    userName: "Cookie",
    password: "1234",
    transactions: {
      IncExp: true,
      amount: 100,
      category: "Allowances",
      description: "October pocket money",
      date: new Date(Date.now())
    }
  },

  {
    name: "John Dough",
    userName: "Dojo",
    password: "1234",
    transactions: {
      IncExp: false,
      amount: 40,
      category: "Expenses",
      description: "shoes",
      date: new Date(Date.now())
    }
  },

  {
    name: "Jane Cake",
    userName: "Cookie",
    password: "1234",
    transactions: {
      IncExp: false,
      amount: 50,
      category: "Expenses",
      description: "shoes",
      date: new Date(Date.now())
    }
  }
];

db.UserModel.remove({})
  .then(() => {
    const promises = [];
    for (let i = 0; i < transactionSeed.length; i++) {
      promises.push(db.UserModel.create(transactionSeed[i]));
    }
    return Promise.all(promises);
  })
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
