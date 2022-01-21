const photoService = require('../services/photo');

const findAll = async (req, res) => {
  const { query } = req.query;
  try {
    const photo = await photoService.findAll(query);
    return res.status(200).json(photo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  const { body } = req.body;
  try {
    const newPhoto = photoService.create(body);
    return res.status(200).json(newPhoto);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteById = async (req, res) => {
  const photoId = req.params.body;
  try {
    const data = await photoService.deleteById(photoId);
    return res.status(200).json(data.ok);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateById = async (req, res) => {
  const photoId = req.params.body;
  const { photoData } = req.body;
  try {
    const data = await photoService.updateById(photoId, photoData);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { findAll, create, deleteById, updateById };
