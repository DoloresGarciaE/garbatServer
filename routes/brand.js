const brandController = require("../controllers/brand");
const express = require("express");
const router = express.Router();

router.get("", brandController.findAll);
router.post("", brandController.create);

module.exports = router;