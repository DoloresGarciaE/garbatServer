const express = require('express');

const router = express.Router();
const carRouter = require('./cars');
const fuelRouter = require('./fuel');
const colorRouter = require('./color');
const brandRouter = require('./brand');
const userRouter = require('./user');

router.use('/api/brand', brandRouter);
router.use('/api/car', carRouter);
router.use('/api/color', colorRouter);
router.use('/api/fuel', fuelRouter);
router.use('/api/user', userRouter);

module.exports = router;
