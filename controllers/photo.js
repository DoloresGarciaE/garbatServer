const photoService = require("../services/photo");

function findAll(req, res) {
    photoService
        .findAll(req.query)
        .then((photo) => {
            return res.status(200).json(photo);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function create(req, res) {
    photoService
        .create(req.body)
        .then((newPhoto) => {
            return res.status(201).json(newPhoto);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function deleteById(req, res) {
    const photoId = req.params.body;
    photoService
        .deleteById(photoId)
        .then((data) => {
            return res.status(200).json(data.ok);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function updateById(req, res) {
    const photoId = req.params.body;
    const photoData = req.body.photoData;
    photoService
        .updateById(photoId, photoData)
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

module.exports = { findAll, create, deleteById, updateById }