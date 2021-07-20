const carModel = require("../models/car");

async function findAll(filter = null) {
  try {
    return await carModel.find(filter);
  } catch (error) {
    console.log(error);
  }
}

async function create(carData) {
  try {
    return await carModel.create(carData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { findAll, create };
