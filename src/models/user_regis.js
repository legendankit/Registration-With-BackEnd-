const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   firstname: {
    type: String,
    required: true
   },
   lastname: {
    type: String,
    required: true
   },
   email: {
    type: String,
    required: true,
   },
   city: {
    type: String,
    required: true
   },
   country: {
    type: String,
    required: true
   },
   gender: {
    type: String,
    required: true
   }
})

const Register = new mongoose.model("Register", userSchema);

module.exports = Register;