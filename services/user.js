const userModel = require("../models/user");

async function findAll(filter = null) {
    try {
        return await userModel.find(filter);
    } catch (error) {
        console.log(error);
    }
}

async function create(userData) {
    try {
        return await userModel.create(userData);
    } catch (error) {
        console.log(error);
    }
}

async function deleteById(userId) {
    try {
        let userDeleted = await userModel.deleteOne({ _id: userId });
        return userDeleted;
    } catch (error) {
        throw error;
    }
}

async function updateById(userId, userData) {
    try {
        let userUpdate = await userModel.updateOne({ _id: userId }, userData);
        return userUpdate;
    }
    catch (error) {
        throw error;
    }
}

module.exports = { findAll, create, deleteById, updateById, };