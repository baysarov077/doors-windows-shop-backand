const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  image: Array,
  text: String,
  title: String
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post
