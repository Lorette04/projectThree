const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
   // id: { type: String, required: true },
   name: { type: String, required: true },
   userName: { type: String, unique:true, required: true },
   password: { type: String, required: true },
   // accountNumber: {transactionSchema},

   transaction: {
       default: { type: Boolean, required: true},
       amount: { type: Number, requird: true},
       category: { type: String, required: true },
       description: { type: String},
       date: { type: Date, required: true }
   }},
  );

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;


