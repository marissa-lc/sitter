const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  day: { type: String, required: true },
  events: [{ 
    time: { type: String, required: true},
    activity: { type: String, required: true}
  }],
  notes: String,
  date: { type: Date, default: Date.now }
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
