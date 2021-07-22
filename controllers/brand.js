const brandService = require("../services/brand");

function findAll(req, res) {
    brandService
        .findAll(req.query)
        .then((brand) => {
            return res.status(200).json(brand);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function create(req, res) {
    brandService
        .create(req.body)
        .then((newBrand) => {
            return res.status(201).json(newBrand);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function deleteById(req, res) {
    const brandId = req.params.brandId;
    brandService
        .deleteById(brandId)
        .then((data) => {
            return res.status(200).json(data.ok);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

module.exports = {
    findAll,
    create,
    deleteById,
};