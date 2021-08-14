const brandController = require("../controllers/brand");
const express = require("express");
const router = express.Router();

router.get("", brandController.findAll);
router.post("", brandController.create);
router.delete("/:brandId", brandController.deleteById);
router.put("/:brandId", brandController.updateById);


module.exports = router;