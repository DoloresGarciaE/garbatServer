const photoModel = require('../models/photo');

async function findAll(filter = null) {
  try {
    return await photoModel.find(filter);
  } catch (error) {
    console.log(error);
  }
}

async function create(photoData) {
  try {
    return await photoModel.create(photoData);
  } catch (error) {
    console.log(error);
  }
}

async function deleteById(photoId) {
  try {
    const photoDeleted = await photoModel.deleteOne({ _id: photoId });
    return photoDeleted;
  } catch (error) {
    throw error;
  }
}

async function updateById(photoId, photoData) {
  try {
    const photoUpdate = await photoModel.updateOne({ _id: photoId }, photoData);
    return photoUpdate;
  } catch (error) {
    throw error;
  }
}

module.exports = { findAll, create, deleteById, updateById };
