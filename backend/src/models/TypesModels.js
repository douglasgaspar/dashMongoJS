const mongoose = require('mongoose');

const TypesSchema = new mongoose.Schema({
    sensorID: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        default: ''
    }
});

module.exports = mongoose.model("Types", TypesSchema);