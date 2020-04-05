import axios from "axios";
const Url="https://www.googleapis.com/books/v1/";
// let query = "";

export default {
  // getGoogleBooks: function(search) {
  //   let query = "volumes?q=" + search;
  //   return axios.get(Url + query)
  // },

  login: function(email, password) {
    return axios.post("/api/login", {
      email: email,
      password: password
    })
  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves the schedule to the database
  saveSchedule: function(scheduleData) {
    // console.log("scheduleData in API", schdeuldData)
    return axios.post("/api/schedule", scheduleData);
  },

  // put call - 
  // updateSchedule: function(scheduleData) {
  //   return axios.put("/api/schedule", scheduleData);
  // }
};