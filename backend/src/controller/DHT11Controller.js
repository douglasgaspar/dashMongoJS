const dht11Model = require('../models/dht11Model');

module.exports = {
    getTempetarures : async function(req, res){
       var values = await dht11Model.find().select('measureTemperature -_id').sort('-createdAt').limit(12);
       var temperatures = [];
       values.map(resp1 => {temperatures.push(resp1.measureTemperature)});
       //console.log(values);
       res.send(temperatures);
    },
    postTemperature : async function(req, res){
        const {sensorID, name, measureTemperature, measureHumidity, createdAt} = req.body;

        const dht11 = await dht11Model.create({
            sensorID,
            name,
            measureTemperature,
            measureHumidity,
            createdAt
        });

        let temp = measureTemperature;
        if(temp > 26){
            res.json("L1ON");
        }else{
            res.json("L1OFF");
        }
    }
}