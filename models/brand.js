const mongoose = require('mongoose');

// Registra la informacion del brand
const BrandSchema = new mongoose.Schema({
  name: String,
});

BrandSchema.methods.getId = async function getId() {
  return this.name;
};

const BrandModel = mongoose.model('Brand', BrandSchema);

// Crear un nuevo brand
BrandModel.createBrand = async function createBrand(name) {
  try {
    let brand = new BrandModel();
    brand.name = name;
    brand = await brand.save();
    return brand;
  } catch (error) {
    return error;
  }
};

module.exports = BrandModel;
