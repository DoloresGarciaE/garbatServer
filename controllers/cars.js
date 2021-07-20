const carService = require("../services/cars");

function findAll(req, res) {
  carService
    .findAll(req.query)
    .then((cars) => {
      return res.status(200).json(cars);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

function create(req, res) {
  carService
    .create(req.body)
    .then((newCar) => {
      return res.status(201).json(newCar);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

module.exports = {
  findAll,
  create,
};
