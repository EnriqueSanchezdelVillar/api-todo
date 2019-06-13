const express = require('express')
const api = express.Router()
const taskController = require('../controllers/task.js');
const postController = require('../controllers/post')
// Create a new Note


api.post('/tasks', taskController.create)
// Retrieve all Notes
api.get('/tasks', taskController.findAll)
// Retrieve a single Note with noteId
api.get('/tasks/:taskId', taskController.findOne)
// Update a Note with noteId
api.put('/tasks/:taskId', taskController.update)
// Delete a Note with noteId
api.delete('/tasks/:taskId', taskController.remove)
api.get('/hola', taskController.hola)
api.post('/test', taskController.test)
api.post('/edad', taskController.edad)
api.post('/email', taskController.email)

api.post('/posts_create', postController.create)
// Retrieve all Notes
api.get('/get_all', postController.read)
api.get('/posts/:postId', postController.giveOne)
api.delete('/posts/:postId', postController.remove)
api.put('/posts/:postId', postController.update)
api.patch('/posts/:postId', postController.updateOne)



module.exports = {
    api
}