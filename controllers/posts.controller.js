const Post = require('../models/Post.model')

module.exports.postsController = {
  addPost: async (req, res) => {
    try {
      const post = await Post.create({
        image: req.file.path,
        text: req.body.text,
        title: req.body.title
      })
      return res.json(post)
    } catch (error) {
      res.json(`addPost: ${error.message}`)
    }
  },
  deletePost: async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id)
      res.json(post)
    } catch (error) {
      res.json(`deletePost: ${error}`)
    }
  },
  getPosts: async (req, res) => {
    try {
      const post = await Post.find()
      res.json(post)
    } catch (error) {
      res.json(`getPosts: ${error}`)
    }
  }
}