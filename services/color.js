const colorModel = require('../models/color');

async function findAll(filter = null) {
  try {
    return await colorModel.find(filter);
  } catch (error) {
    console.log(error);
  }
}

async function create(colorData) {
  try {
    return await colorModel.create(colorData);
  } catch (error) {
    console.log(error);
  }
}

async function deleteById(colorId) {
  try {
    const colorDeleted = await colorModel.deleteOne({ _id: colorId });
    return colorDeleted;
  } catch (error) {
    throw error;
  }
}

async function updateById(colorId, colorData) {
  try {
    const colorUpdate = await colorModel.updateOne({ _id: colorId }, colorData);
    return colorUpdate;
  } catch (error) {
    throw error;
  }
}

module.exports = { findAll, create, deleteById, updateById };
