import axios from "axios";

export default {
    // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/Login" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/Login" + id);
  },
  // Saves a User the database
  createUser: function(userData) {
    return axios.post("/api/Login", userData);
  }
};