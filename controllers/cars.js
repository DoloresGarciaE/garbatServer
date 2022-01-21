const carService = require('../services/cars');

const findAll = async (req, res) => {
  const { query } = req.query;
  try {
    const cars = await carService.findAll(query);
    return res.status(200).json(cars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  const { body } = req.body;
  try {
    const newCar = carService.create(body);
    return res.status(200).json(newCar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  findAll,
  create,
};
