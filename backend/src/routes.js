var express = require('express');
var DHT11Controller = require('./controller/DHT11Controller');

var TypesController = require('./controller/TypesController');
var MeasurementsController = require('./controller/MeasurementsController');

//Criação de variável para armazenar as rotas
var router = express.Router();

//Configuração das rotas possíveis
router.route('/registerType').post(TypesController.registerType);
router.route('/registerMeasurement').post(MeasurementsController.registerMeasurement);
router.route('/getLastMeasurements').get(MeasurementsController.getLastMeasurements);

router.route('/getLastTemperaturesHumidities').get(DHT11Controller.getLastTemperaturesHumidities);
router.route('/postTemperature').post(DHT11Controller.postTemperature);

module.exports = router;