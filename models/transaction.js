const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
   // id: { type: String, required: true },
   name: { type: String, required: true },
   userName: { type: String, unique:true, required: true },
   password: { type: String, required: true },
   // accountNumber: {transactionSchema},

   transaction: {
       default: { type: Boolean, unique: true, required: true},
       amount: { type: Number, required: true},
       category: { type: String, required: true },
       description: { type: String},
       date: { type: Date, required: true }
   }},
  );

const transactionModel = mongoose.model("Transaction", transactionSchema);

module.exports = transactionModel;


