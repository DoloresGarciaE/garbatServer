const express = require('express');
const brandController = require('../controllers/brand');

const router = express.Router();

router.get('', brandController.findAll);
router.post('', brandController.createBrand);
router.delete('/:brandId', brandController.deleteById);
router.put('/:brandId', brandController.updateById);
router.get('/:name', brandController.findByName);

module.exports = router;
