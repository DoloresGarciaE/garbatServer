const fuelModel = require('../models/fuel');

async function findAll(filter = null) {
  try {
    return await fuelModel.find(filter);
  } catch (error) {
    console.log(error);
  }
}

async function create(fuelData) {
  try {
    return await fuelModel.create(fuelData);
  } catch (error) {
    console.log(error);
  }
}

async function deleteById(fuelId) {
  try {
    const fuelDeleted = await fuelModel.deleteOne({ _id: fuelId });
    return fuelDeleted;
  } catch (error) {
    throw error;
  }
}

async function updateById(fuelId, fuelData) {
  try {
    const fuelUpdate = await fuelModel.updateOne({ _id: fuelId }, fuelData);
    return fuelUpdate;
  } catch (error) {
    throw error;
  }
}

module.exports = { findAll, create, deleteById, updateById };
