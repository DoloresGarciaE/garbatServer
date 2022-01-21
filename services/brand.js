const { missingbrandData } = require('../constants/serviceErrors');
const brandModel = require('../models/brand');

// Obtener todos los brands
const findAll = async function findAll(filter = null) {
  try {
    return await brandModel.find(filter);
  } catch (error) {
    return error;
  }
};

// Crea un Brand
const create = async function create(brandData) {
  if (!brandData) throw missingbrandData;
  try {
    return await brandModel.create(brandData);
  } catch (error) {
    return error;
  }
};

// Elimina un brand por ID
const deleteById = async function deleteById(brandId) {
  if (!brandId) throw missingbrandData;
  try {
    const brandDeleted = await brandModel.deleteOne({ _id: brandId });
    return brandDeleted;
  } catch (error) {
    return error;
  }
};

// Actualiza info de Brand
const updateById = async function updateById(brandId, brandData) {
  if (!brandId) throw missingbrandData;
  if (!brandData) throw missingbrandData;
  try {
    const brandUpdate = await brandModel.updateOne({ _id: brandId }, brandData);
    return brandUpdate;
  } catch (error) {
    return error;
  }
};

module.exports = { findAll, create, deleteById, updateById };
