const express = require("express");
const router = express.Router();
const carRouter = require("./cars");
router.use("/api/car", carRouter);

const brandRouter = require("./brand");
router.use("/api/brand", brandRouter);

module.exports = router;
