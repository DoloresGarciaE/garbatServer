const brandModel = require("../models/brand");

async function findAll(filter = null) {
    try {
        return await brandModel.find(filter);
    } catch (error) {
        console.log(error);
    }
}

async function create(brandData) {
    try {
        return await brandModel.create(brandData);
    } catch (error) {
        console.log(error);
    }
}

async function deleteById(brandId) {
    try {
        let brandDeleted = await brandModel.deleteOne({ _id: brandId });
        return brandDeleted;
    } catch (error) {
        throw error;
    }
}

module.exports = { findAll, create, deleteById, };