const Task = require('../models/task')

function create(req, res){
    if(!req.body) {
        return res.status(400).send({
            message: "Task content can not be empty"
        });
    }

    // Create a Task Object
    const task = new Task({
        task: req.body.task,
    });

    // Save Task in the database
    task.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Task."
        });
    });


}

function findAll(req, res){

    Task.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tasks."
        });
    });

}


function findOne(req, res){

    Task.findById(req.params.taskId)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Task not found with id " + req.params.taskId
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });
        }
        return res.status(500).send({
            message: "Error retrieving task with id " + req.params.taskId
        });
    });

}

function update(req, res){

    if(!req.body) {
        return res.status(400).send({
            message: "Task content can not be empty"
        });
    }

    // Find Task and update it with the request body
    Task.findByIdAndUpdate(req.params.taskId, {
        task: req.body.task,
        done: req.body.done
    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Task not found with id " + req.params.taskId
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });
        }
        return res.status(500).send({
            message: "Error updating task with id " + req.params.taskId
        });
    });

}


function remove(req, res){

    Task.findByIdAndRemove(req.params.taskId)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Task not found with id " + req.params.taskId
                });
            }
            res.send({message: "Task deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });
        }
        return res.status(500).send({
            message: "Could not delete Task with id " + req.params.taskId
        });
    });

}

function hola(req,res){
    return res.status(200).send({
        message: "Hola puto",
        otro: "y adios puto"
    });

}

function test(req, res){
    if (!req.body.name){
        return res.status(400).send({
            message: "Faltan parametros"
        })
    }else{
        return res.status(200).send({
            other: req.body
        })
    }
}

function edad(req,res){
    if(!req.body.edad){
        return res.status(400).send({
            message: "Faltan parametros"
        })
    }else{
        if(req.body.edad < 18){
            return res.status(200).send({
                message: "No tienes edad"
            })
        }   else{
            return res.status(200).send({
                message: "Adelante"
            })
        }
    }
}




function email (req,res) {

    if (!req.body.email) {
        return res.status(404).send({
            message: "Me falta el email"
        })
    }

    // Create a Task Object
    const task = new Task({
        email: req.body.email,
        nombre: req.body.nombre
    });


    task.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while creating the Task."
        });
    });


    function blog(req, res) {
        if (!req.body.poste) {
            return res.status(404).send({
                message: "Me falta el email"
            })
        }

        // Create a Task Object
        const task = new Task({
            email: req.body.email,
            nombre: req.body.nombre
        });


        task.save()
            .then(data => {
                res.status(200).send(data);
            }).catch(err => {
            res.status(400).send({
                message: err.message || "Some error occurred while creating the Task."
            });
        });
    }
}




module.exports = {
    create,
    findAll,
    findOne,
    update,
    remove,
    hola,
    test,
    edad,
    email,
}