const mongoose = require('mongoose');

async function connection(url) {
  try {
    return await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { connection };
