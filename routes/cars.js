const carController = require("../controllers/cars");
const express = require("express");
const router = express.Router();

router.get("", carController.findAll);
router.post("", carController.create);

module.exports = router;
