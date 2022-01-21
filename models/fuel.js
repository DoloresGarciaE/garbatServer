const mongoose = require('mongoose');

const fuelSchema = new mongoose.Schema({
  type: String,
});

fuelSchema.set('collection', 'fuel');

const FuelModel = mongoose.model('Fuel', fuelSchema);

FuelModel.create = async function create(type) {
  try {
    let fuel = new FuelModel();
    fuel.type = type;

    fuel = await fuel.save();
    return fuel;
  } catch (error) {
    return error;
  }
};

module.exports = FuelModel;
