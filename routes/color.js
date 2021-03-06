const express = require('express');
const colorController = require('../controllers/color');

const router = express.Router();

router.get('', colorController.findAll);
router.post('', colorController.create);
router.delete('/:colorId', colorController.deleteById);
router.put('/:colorId', colorController.updateById);

module.exports = router;
