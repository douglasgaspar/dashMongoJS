const mongoose = require('mongoose');

const MeasurementsSchema = new mongoose.Schema({
    measuredValue: {
        type: Number,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now,
    },
    sensorTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Types',
    }
});

module.exports = mongoose.model('Measurements', MeasurementsSchema);