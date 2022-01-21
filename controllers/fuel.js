const fuelService = require('../services/fuel');

const findAll = async (req, res) => {
  const { query } = req.query;
  try {
    const fuel = await fuelService.findAll(query);
    return res.status(200).json(fuel);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  const { body } = req.body;
  try {
    const newFuel = await fuelService.create(body);
    return res.status(200).json(newFuel);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteById = async (req, res) => {
  const { fuelId } = req.params;
  try {
    const data = await fuelService.deleteById(fuelId);
    return res.status(200).json(data.ok);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateById = async (req, res) => {
  const { fuelId } = req.params;
  const { fuelData } = req.body;
  try {
    const data = await fuelService.updateById(fuelId, fuelData);
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
