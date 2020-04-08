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