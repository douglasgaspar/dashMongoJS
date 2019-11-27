const measurementsModel = require('../models/MeasurementsModel');

module.exports = {
    registerMeasurement : async function(req, res){
        const {measuredValue, sensorTypeId} = req.body;

        const newRegister = await measurementsModel.create({
            measuredValue,
            sensorTypeId
        });

        return res.json(newRegister);
    },
    getLastMeasurements : async function(req, res){
        let sensorTypeId = req.query.sid;

        var values = await measurementsModel.find({sensorTypeId}).select('measuredValue createdAt').sort('-createdAt').limit(12);

        res.json(values);
    }
};