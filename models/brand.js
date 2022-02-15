const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: String,
});

brandSchema.set('collection', 'brand');

const BrandModel = mongoose.model('brand', brandSchema);

BrandModel.create = async function create(name) {
  try {
    let photos = new BrandModel();
    photos.name = name;

    photos = await photos.save();
    return photos;
  } catch (error) {
    return error;
  }
};

module.exports = BrandModel;
