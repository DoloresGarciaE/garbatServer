"use strict";

require("dotenv").config({ path: "../.env" });

export const DB = {
  USER: process.env.DB_USER,
  PWD: process.env.DB_PWD,
  PORT: process.env.DB_PORT,
  NAME: process.env.DB_NAME,
};
