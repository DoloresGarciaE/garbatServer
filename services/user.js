const jwt = require('jsonwebtoken');
const userModel = require('../models/user');
const environmentVars = require('../config/environmentConfig');

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
    throw error;
  }
}

async function deleteById(userId) {
  try {
    const userDeleted = await userModel.deleteOne({ _id: userId });
    return userDeleted;
  } catch (error) {
    throw error;
  }
}

async function login(loginInfo) {
  try {
    const user = await userModel.findOne({ email: loginInfo.email });
    if (user) {
      if (user.comparePassword(loginInfo.pwd)) {
        return {
          token: jwt.sign(
            {
              email: loginInfo.email,
              name: user.name,
              surname: user.surname,
              _id: user._id,
            },
            environmentVars.JWT.PASSWORD,
          ),
          userData: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            _id: user._id,
          },
        };
      }
      throw { status: 401, message: 'Authentication failed. Password wrong' };
    } else
      throw {
        status: 412,
        message: "Authentication failed. User doesn't exist",
      };
  } catch (error) {
    throw error;
  }
}

async function updateById(userId, userData) {
  try {
    const userUpdate = await userModel.updateOne({ _id: userId }, userData);
    return userUpdate;
  } catch (error) {
    throw error;
  }
}

module.exports = { findAll, create, deleteById, updateById, login };
