const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
    IncExp: { type: Boolean, default: true, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true }
});

const UserSchema = new Schema({
    // id: { type: String, required: true },
    name: { type: String, required: true },
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    transactions: [TransactionSchema]
},
);


const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;


