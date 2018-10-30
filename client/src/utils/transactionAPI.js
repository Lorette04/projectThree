import axios from "axios";

export default {
  // Gets all transactions
  getTransactions: function() {
    return axios.get("/api/transactions/History");
  },
  getTransactions: function() {
    return axios.get("/api/transactions/Overview");
  },
  // Gets the transaction with the given id
  getTransaction: function(id) {
    return axios.get("/api/transactions/History/" + id);
  },
  // Deletes the transaction with the given id
  deleteTransaction: function(id) {
    return axios.delete("/api/transactions/History/" + id);
  },
   // Deletes the transaction with the given id
   updateTransaction: function(id) {
    return axios.update("/api/transactions/History/" + id);
  },
  // Saves a transaction the database
  saveTransaction: function(transactionData) {
    return axios.post("/api/transactions/AddTransaction", transactionData);
  }
};
