const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  url: String,
  type: String,
});

photoSchema.set('collection', 'photo');

const PhotoModel = mongoose.model('Photo', photoSchema);

PhotoModel.create = async function create(url, type) {
  try {
    let photo = new PhotoModel();
    photo.url = url;
    photo.type = type;

    photo = await photo.save();
    return photo;
  } catch (error) {
    return error;
  }
};

module.exports = PhotoModel;
