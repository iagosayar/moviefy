'use strict'

var express = require('express');
var PostController = require('../controllers/post');
var api = express.Router();

api.get('/post/:id', PostController.getPost);
api.post('/post', PostController.savePost);
api.get('/posts/:page?', PostController.getPosts);
api.put('/post/:id', PostController.updatePost);
api.delete('/post/:id', PostController.deletePost);

module.exports = api;