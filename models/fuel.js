const mongoose = require('mongoose');

let fuelSchema = new mongoose.Schema({
    type: String
});

fuelSchema.set("collection", "fuel");

const fuelModel = mongoose.model('Fuel', fuelSchema);

module.exports = fuelModel;