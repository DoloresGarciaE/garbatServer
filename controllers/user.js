const userService = require('../services/user');

const findAll = async (req, res) => {
  const { query } = req;
  try {
    const user = await userService.findAll(query);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  const { body } = req;
  try {
    const newUser = await userService.create(body);
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { body } = req;
  try {
    const resp = await userService.login(body);
    return res.status(200).json(resp);
  } catch (error) {
    return res.status(error?.status || 500).json(error);
  }
};

const deleteById = async (req, res) => {
  const { userId } = req.params;
  try {
    const data = await userService.deleteById(userId);
    return res.status(200).json(data.ok);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateById = async (req, res) => {
  const { userId } = req.params;
  const { userData } = req.body;
  try {
    const data = await userService.updateById(userId, userData);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  findAll,
  create,
  login,
  deleteById,
  updateById,
};
