import axios from "axios";

export default {
    // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/" + id);
  },
  // Saves a User the database
  saveUser: function(userData) {
    return axios.post("/api/", userData);
  }
};