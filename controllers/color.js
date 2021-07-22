const colorService = require("../services/color");

function findAll(req, res) {
    colorService
        .findAll(req.query)
        .then((color) => {
            return res.status(200).json(color);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function create(req, res) {
    colorService
        .create(req.body)
        .then((newColor) => {
            return res.status(201).json(newColor);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function deleteById(req, res) {
    const colorId = req.params.colorId;
    colorService
        .deleteById(colorId)
        .then((data) => {
            return res.status(200).json(data.ok);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function updateById(req, res) {
    const colorId = req.params.colorId;
    const colorData = req.body.colorData;
    colorService
        .updateById(colorId, colorData)
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