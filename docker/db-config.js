// import { DB } from "../config/environmentConfig";
const DB = require("../config/environmentConfig");

db.createUser({
  user: DB.USER,
  pwd: DB.PWD,
  roles: [
    {
      role: "readWrite",
      db: DB.NAME,
    },
  ],
});
