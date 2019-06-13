const Post = require('../models/post')

function create(req, res){
    if(!req.body) {
        return res.status(400).send({
            message: "Task content can not be empty"
        });
    }

    // Create a Task Object
    const post = new Post({
        tittle: req.body.tittle,
        email: req.body.email,
        category: req.body.category
    });

    // Save Task in the database
    post.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Task."
        });
    });


}


function read(req, res){

    Post.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tasks."
        });
    });

}
function giveOne(req, res){

    Post.findById(req.params.postId)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Task not found with id " + req.params.postId
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.postId
            });
        }
        return res.status(500).send({
            message: "Error retrieving task with id " + req.params.postId
        });
    });

}


function remove(req, res){

    Post.findByIdAndRemove(req.params.postId)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "post not found with id " + req.params.postId
                });
            }
            res.send({message: "Post deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });
        }
        return res.status(500).send({
            message: "Could not delete Post with id " + req.params.postId
        });
    });
}

function update(req, res){

    if(!req.body) {
        return res.status(400).send({
            message: "Post content can not be empty"
        });
    }

    // Find Task and update it with the request body
    Post.findByIdAndUpdate(req.params.postId, {
        tittle: req.body.tittle,
        email: req.body.email,
        category: req.body.category

    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Task not found with id " + req.params.postId
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.postId
            });
        }
        return res.status(500).send({
            message: "Error updating task with id " + req.params.postId
        });
    });

}


function updateOne(req, res){

    if(!req.body) {
        return res.status(400).send({
            message: "Post content can not be empty"
        });
    }

    let objectToUpdate = {}

    if(req.body.tittle){
        objectToUpdate.tittle = req.body.tittle
    }

    if(req.body.email){
        objectToUpdate.email = req.body.email
    }


    if(req.body.category){
        objectToUpdate.category = req.body.category
    }


    // Find Task and update it with the request body
    Post.findOneAndUpdate(req.params.postId, objectToUpdate, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Task not found with id " + req.params.postId
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.postId
            });
        }
        return res.status(500).send({
            message: "Error updating task with id " + req.params.postId
        });
    });
}






module.exports = {
    create,
    read,
    giveOne,
    remove,
    update,
    updateOne
}