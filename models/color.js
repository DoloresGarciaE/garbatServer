const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  name: String,
});

colorSchema.set('collection', 'color');

const ColorModel = mongoose.model('Color', colorSchema);

ColorModel.create = async function create(name) {
  try {
    let photos = new ColorModel();
    photos.name = name;

    photos = await photos.save();
    return photos;
  } catch (error) {
    return error;
  }
};

module.exports = ColorModel;
