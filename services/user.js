/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');
const environmentVars = require('../config/environmentConfig');

async function findAll(filter = null) {
  try {
    return await userModel.find(filter);
  } catch (error) {
    return error;
  }
}

async function create(userData) {
  try {
    return await userModel.create(userData);
  } catch (error) {
    return error;
  }
}

async function deleteById(userId) {
  try {
    const userDeleted = await userModel.deleteOne({ _id: userId });
    return userDeleted;
  } catch (error) {
    return error;
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
      return { status: 401, message: 'Authentication failed. Password wrong' };
    }
    return {
      status: 412,
      message: "Authentication failed. User doesn't exist",
    };
  } catch (error) {
    return error;
  }
}

async function updateById(userId, userData) {
  try {
    const userUpdate = await userModel.updateOne({ _id: userId }, userData);
    return userUpdate;
  } catch (error) {
    return error;
  }
}

module.exports = { findAll, create, deleteById, updateById, login };
