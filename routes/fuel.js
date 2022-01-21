const express = require('express');
const fuelController = require('../controllers/fuel');

const router = express.Router();

router.get('', fuelController.findAll);
router.post('', fuelController.create);
router.delete('/:fuelId', fuelController.deleteById);
router.put('/:fuelId', fuelController.updateById);

module.exports = router;
