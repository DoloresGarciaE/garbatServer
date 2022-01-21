require('dotenv').config({ path: '.env' });

module.exports = {
  DB: {
    USER: process.env.DB_USER,
    PWD: process.env.DB_PWD,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME,
    DB_URI: process.env.DB_URI,
  },
  EXPRESS: {
    PORT: parseInt(process.env.PORT, 10),
  },
  JWT: {
    PASSWORD: process.env.JWT_SECRET,
  },
};
