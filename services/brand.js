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

module.exports = { findAll, create };