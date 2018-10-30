const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
    IncExp: { type: Boolean, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true }
});

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    transactions: [{
        type: TransactionSchema,
        default: {
            IncExp: true
        }
    }],
    // transactionHistory: [{type: Schema.transactions.id}]
    // transactionHistory: [{type: Schema.Types.ObjectId, ref: "Transactions"}]

},
);


const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;

