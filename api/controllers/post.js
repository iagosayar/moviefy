'use strict'

var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var Post = require('../models/post');

function getPost(req, res){
	var postId = req.params.id;

	Post.findById(postId, (err, post) => {
		if(err){
			res.status(500).send({message: 'Error en la petición.'});
		}else{
			if(!post){
				res.status(404).send({message: 'La noticia no existe'});
			}else{
				res.status(200).send({post});
			}
		}
	});

}

function getPosts(req, res){
	if(req.params.page){
		var page = req.params.page;
	}else{
		var page = 1;
	}

	var itemsPerPage = 1000;

	Post.find().sort('title').paginate(page, itemsPerPage, function(err, posts, total){
		if(err){
			res.status(500).send({message: 'Error en la petición.'});
		}else{
			if(!posts){
				res.status(404).send({message: 'No hay noticias !!'});
			}else{
				return res.status(200).send({
					total_items: total,
					posts: posts
				});
			}
		}
	});
}


function savePost(req, res){
	var post = new Post();

	var params = req.body;
	post.heading = params.heading;
	post.content = params.content;

	post.save((err, postStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar la noticia'});
		}else{
			if(!postStored){
				res.status(404).send({message: 'La noticia no ha sido guardado'});
			}else{
				res.status(200).send({post: postStored});
			}
		}
	});
}


function updatePost(req, res){
	var postId = req.params.id;
	var update = req.body;

	Post.findByIdAndUpdate(postId, update, (err, postUpdated) => {
		if(err){
			res.status(500).send({message: 'Error al guardar la noticia'});
		}else{
			if(!postUpdated){
				res.status(404).send({message: 'La noticia no ha sido actualizado'});
			}else{
				res.status(200).send({post: postUpdated});
			}
		}
	});
}

function deletePost(req, res){
	var postId = req.params.id;
	
	Post.findByIdAndRemove(postId, (err, postRemoved) => {
		if(err){
			res.status(500).send({message: 'Error en el servidor'});
		}else{
			if(!postRemoved){
				res.status(404).send({message: 'No se ha borrado la noticia'});
			}else{
				res.status(200).send({post: postRemoved});
			}
		}
	});
}

module.exports = {
	getPost,
	savePost,
	getPosts,
	updatePost,
	deletePost
};