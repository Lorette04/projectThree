const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  budgetTable: { type: Boolean, required: true },
  categorie: { type: Array, required: true },
  description: { type: String, required: true },
  price: { type: Number, requird: true},
  date: { type: Date, default: Date.now }
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
