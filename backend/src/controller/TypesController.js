const typesModel = require('../models/TypesModels');

module.exports = {
    registerType : async function(req, res){
        const {sensorID, name, description} = req.body;

        const newRegister = await typesModel.create({
            sensorID,
            name,
            description
        });

        return res.json(newRegister);
    }
};