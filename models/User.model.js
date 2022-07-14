const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  login: {
    type: String,
    unique: true
  },
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User