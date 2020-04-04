const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true }, // alowed null = false
  password: { type: String, required: true }, // allowed null = false
  date: { type: Date, default: Date.now }
});

const Schedule = mongoose.model("Schedule", userSchema);

module.exports = User;
