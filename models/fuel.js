const mongoose = require('mongoose');

const schema = mongoose.Schema;
let fuelSchema = new schema({
    type: String
});

fuelSchema.set("collection", 'fuel');

const fuelModel = mongoose.Model('Fuel', fuelSchema);

module.exports(fuelModel);