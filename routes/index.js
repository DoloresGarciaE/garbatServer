const express = require('express');

const router = express.Router();
const carRouter = require('./cars');
const fuelRouter = require('./fuel');
const colorRouter = require('./color');
const brandRouter = require('./brand');
const userRouter = require('./user');
const photoRouter = require('./photo');

router.use('/api/brand', brandRouter);
router.use('/api/car', carRouter);
router.use('/api/color', colorRouter);
router.use('/api/fuel', fuelRouter);
router.use('/api/user', userRouter);
router.use('/api/photo', photoRouter);

module.exports = router;
