const express = require('express');
const photoController = require('../controllers/photo');

const router = express.Router();

router.get('', photoController.findAll);
router.post('', photoController.create);
router.delete('/:photoId', photoController.deleteById);
router.put('/:photoId', photoController.updateById);

module.exports = router;
