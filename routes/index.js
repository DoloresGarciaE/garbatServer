const express = require("express");
const router = express.Router();
const carRouter = require("./cars");
router.use("/api/car", carRouter);

module.exports = router;
