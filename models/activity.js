const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ActivitySchema = mongoose.Schema({
        title: String,
        description: String,
        creatorId: {type: Schema.Types.ObjectId, ref:'User'},
        lat: Number,
        long: Number,
        address: String

    },
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Activity', ActivitySchema);