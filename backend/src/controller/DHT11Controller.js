const DHT11Model = require('../models/DHT11Model');

module.exports = {
    getLastTemperaturesHumidities : async function(req, res){
       var values = await DHT11Model.find().select('measuredTemperature measuredHumidity createdAt').sort('-createdAt').limit(12);
       //var temperatures = [];
       //values.map(resp1 => {temperatures.push(resp1.measuredTemperature)});
       //console.log(values);
       //res.send(temperatures);
       res.json(values);
    },
    postTemperature : async function(req, res){
        const {sensorID, name, measuredTemperature, measuredHumidity, createdAt} = req.body;

        const dht11 = await DHT11Model.create({
            sensorID,
            name,
            measuredTemperature,
            measuredHumidity,
            createdAt
        });

        let temp = measuredTemperature;
        if(temp > 26){
            res.json("L1ON");
        }else{
            res.json("L1OFF");
        }
    }
}