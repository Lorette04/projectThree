import axios from "axios";

export default {
  // Gets all transactions
  getTransaction: function() {
    return axios.get("/api/history");
  },
  // Gets the transaction with the given id
  /*  getTransaction: function(id) {
    return axios.get("/api/history/" + id);
  }, */
  // Deletes the transaction with the given id
  deleteTransaction: function(id) {
    return axios.delete("/api/history/" + id);
  },
  // Saves a transaction the database
  saveTransaction: function(transactionData) {
    return axios.post("/api/budgetCreate", transactionData);
  }
};
