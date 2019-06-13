const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
        task: String,
        done: {
            type: Boolean,
            default: false
        },
        email: {
            type: String,
            unique: true
        },
        nombre: {
            type: String
        }

    },
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Task', TaskSchema);