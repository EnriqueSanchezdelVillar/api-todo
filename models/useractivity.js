const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UseractivitySchema = mongoose.Schema({

         userId: {type: Schema.Types.ObjectId, ref: 'table1'},
         activityId: {type: Schema.Types.ObjectId, ref: 'table1'},
         done:{ type: Boolean, default: false }

    },
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Useractivity', UseractivitySchema);