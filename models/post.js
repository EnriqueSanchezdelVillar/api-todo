const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
        tittle: String,
        email: String,
        category:String
    },
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Post', PostSchema);