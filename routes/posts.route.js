const { Router } = require('express')
const { postsController } = require('../controllers/posts.controller')
const router = Router()
const fileMiddleware = require('../middleware/file')


router.get('/posts', postsController.getPosts)
router.post('/posts', fileMiddleware.single('img'), postsController.addPost)
router.delete('/posts/:id', postsController.deletePost)

module.exports = router