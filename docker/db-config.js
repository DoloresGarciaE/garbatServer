import envConfig from "../config/environmentConfig";
const envConfig = require("../config/environmentConfig");
db.createUser({
  user: envConfig.DB.USER,
  pwd: envConfig.DB.PWD,
  roles: [
    {
      role: "readWrite",
      db: envConfig.DB.NAME,
    },
  ],
});
