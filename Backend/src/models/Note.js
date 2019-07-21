const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: String,
}, {
        timestamps: true
    });

module.exports = model('Note', noteSchema);