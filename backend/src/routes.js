var express = require('express');
var DHT11Controller = require('./controller/DHT11Controller');

var router = express.Router();

router.route('/getLastTemperaturesHumidities').get(DHT11Controller.getLastTemperaturesHumidities);
router.route('/postTemperature').post(DHT11Controller.postTemperature);

module.exports = router;