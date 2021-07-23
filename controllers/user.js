const userService = require("../services/user");

function findAll(req, res) {
    userService
        .findAll(req.query)
        .then((user) => {
            return res.status(200).json(user);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function create(req, res) {
    userService
        .create(req.body)
        .then((newUser) => {
            return res.status(201).json(newUser);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function deleteById(req, res) {
    const userId = req.params.userId;
    userService
        .deleteById(userId)
        .then((data) => {
            return res.status(200).json(data.ok);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
}

function updateById(req, res) {
    const userId = req.params.userId;
    const userData = req.body.userData;
    userService
        .updateById(userId, userData)
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