var express = require('express');
var DHT11Controller = require('./controller/DHT11Controller');

var router = express.Router();

router.route('/getLastTemperatures').get(DHT11Controller.getLasTempetarures);
router.route('/getLastHumidities').get(DHT11Controller.getLastHumidities);
router.route('/postTemperature').post(DHT11Controller.postTemperature);

module.exports = router;