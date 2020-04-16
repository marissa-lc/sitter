const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  firstname: String,
  lastname: String,
  relationship: String,
  city: String,
  state: String,
  phone: String,
  email: String, 
  notes: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
