const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // id: { type: String, required: true },
  email: { type: String },
  password: { type: String }
  /*     transactionHistory: [{type: Schema.transactions.id}]
 */ // transactionHistory: [{type: Schema.Types.ObjectId, ref: "Transactions"}]
});

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;
