import axios from "axios";

export default {
  login: function(email, password) {
    return axios.post("/api/login", {
      email: email,
      password: password
    })
  },

  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves the schedule to the database
  saveSchedule: function(scheduleData) {
    // console.log("scheduleData in API", schdeuldData)
    return axios.post("/api/schedules", scheduleData);
  },
  getSchedule: function(day) {
    console.log("INSIDE GETSCHEDULE");
    return axios.get("/api/schedules/" + day);
  },
  getAllSchedules: function() {
      console.log("INSIDE GETALLSCHEDULES");
      return axios.get("/api/schedules");
  },
  addSchedule: function() {
    console.log("INSIDE ADD SCHEDULE");
    return axios.post("/api/schedules");
  }

  // put call - (replace)
  // updateSchedule: function(scheduleData) {
  //   return axios.put("/api/schedule", scheduleData);
  // }
};