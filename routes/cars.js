const express = require('express');
const carController = require('../controllers/cars');

const router = express.Router();

router.get('', carController.findAll);
router.post('', carController.create);

module.exports = router;
