const colorService = require('../services/color');

const findAll = async (req, res) => {
  const { query } = req.query;
  try {
    const color = await colorService.findAll(query);
    return res.status(200).json(color);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  const { body } = req.body;
  try {
    const newColor = await colorService.create(body);
    return res.status(200).json(newColor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteById = async (req, res) => {
  const { colorId } = req.params;
  try {
    const data = await colorService.deleteById(colorId);
    return res.status(200).json(data.ok);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateById = async (req, res) => {
  const { colorId } = req.params;
  const { colorData } = req.body;
  try {
    const data = colorService.updateById(colorId, colorData);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  findAll,
  create,
  deleteById,
  updateById,
};
