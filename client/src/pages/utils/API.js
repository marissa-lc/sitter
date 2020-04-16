import axios from "axios";

export default {
  login: function(email, password) {
    return axios.post("/api/login", {
      email: email,
      password: password
    })
  },

  logout: function() {
    return axios
      .get("/api/logout")
  },

  // Saves the schedule to the database
  saveSchedule: function(scheduleData) {
    console.log("scheduleData in API", scheduleData)
    return axios.post("/api/schedules", scheduleData);
  },
  getSchedule: function(day) {
    console.log("INSIDE GETSCHEDULE");
    console.log(day);
    return axios.get("/api/schedules/" + day);
  },
  getAllSchedules: function() {
      console.log("INSIDE GETALLSCHEDULES");
      return axios.get("/api/schedules");
  },
  addSchedule: function() {
    console.log("INSIDE ADD SCHEDULE");
    return axios.post("/api/schedules");
  },

  updateSchedule: function(scheduleData) {
    console.log("INSIDE UPDATE SCHEDULE")
    return axios.put("/api/schedules", scheduleData);
  },

  // Saves the contact to the database
  saveContact: function(contactData) {
    console.log("contactData in API", contactData)
    return axios.post("/api/contacts", contactData);
  },
  getContact: function(day) {
    console.log("INSIDE GETcontact");
    console.log(day);
    return axios.get("/api/contacts/" + day);
  },
  getAllContact: function() {
      console.log("INSIDE GETALLcontact");
      return axios.get("/api/contacts");
  },
  addContact: function() {
    console.log("INSIDE ADD contact");
    return axios.post("/api/contacts");
  },

  // put call - (replace)
  updateSchedule: function(contactData) {
    console.log("INSIDE UPDATE SCHEDULE")
    return axios.put("/api/contacts", contactData);
  }
};