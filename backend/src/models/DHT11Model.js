const mongoose = require('mongoose');

//Modelo do usuário
const DHT11Schema = new mongoose.Schema({
    sensorID: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    measuredTemperature: {
        type: Number,
        require: true,
    },
    measuredHumidity: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//Exportar o modelo para o mongoose saber que este modelo será usado
module.exports = mongoose.model('DHT11', DHT11Schema);