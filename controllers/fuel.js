const fuelService = require("../services/fuel");

function findAll(req, res) {
    fuelService
        .findAll(req.query)
        .then((fuel) => {
            return res.status(200).json(fuel);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function create(req, res) {
    fuelService
        .create(req.body)
        .then((newFuel) => {
            return res.status(201).json(newFuel);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function deleteById(req, res) {
    const fuelId = req.params.fuelId;
    fuelService
        .deleteById(fuelId)
        .then((data) => {
            return res.status(200).json(data.ok);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function updateById(req, res) {
    const fuelId = req.params.fuelId;
    const fuelData = req.body.fuelData;
    fuelService
        .updateById(fuelId, fuelData)
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((error) => {
            return res.status(500).json(error);
        })
}

module.exports = {
    findAll,
    create,
    deleteById,
    updateById,
};