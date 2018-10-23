const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Transactions collection and inserts the transaction below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reacttransactionlist"
);

const transactionSeed = [
    {
        name: "Jane Cake",
        userName: "Cookie",
        password: "1234",
        transaction: {
            default: true,
            amount: 100,
            category: "Allowances",
            description:
                "October pocket money",
            date: new Date(Date.now())
        }
    },
    {
        name: "Jane Cake",
        userName: "Cookie",
        password: "1234",
        transaction: {
            default: false,
            amount: 50,
            category: "Clothes",
            description:
                "New soccer shoes",
            date: new Date(Date.now())
        }
    },
    {
        name: "Jane Cake",
        userName: "Cookie",
        password: "1234",
        transaction: {
            default: true,
            amount: 10,
            category: "Chores",
            description:
                "Walked John's dog",
            date: new Date(Date.now())
        }
    },
    {
        name: "Jane Cake",
        userName: "Cookie",
        password: "1234",
        transaction: {
            default: false,
            amount: 5,
            category: "Expenses",
            description:
                "Movie ticket",
            date: new Date(Date.now())
        }
    }, ,
];

db.Transaction
    .remove({})
    .then(() => db.Transaction.collection.insertMany(transactionSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
