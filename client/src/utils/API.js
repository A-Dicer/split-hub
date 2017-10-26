import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users/");
  },

  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },

  register: function(user) {
    return axios.post("/api/auth/register", user);
  },
  //login user
  login: function(user) {
    return axios.post("/api/auth/login", user);
  },
  //logout user
  logout: function() {
    return axios.get("/api/auth/logout");
  },
};
