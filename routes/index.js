const express = require("express");
const router = express.Router();

const carRouter = require("./cars");
router.use("/api/car", carRouter);

const brandRouter = require("./brand");
router.use("/api/brand", brandRouter);

const colorRouter = require("./color");
router.use("/api/color", colorRouter);

module.exports = router;
