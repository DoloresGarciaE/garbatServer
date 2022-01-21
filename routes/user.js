const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get('', userController.findAll);
router.post('', userController.create);
router.post('/login', userController.login);
router.delete('/:userId', userController.deleteById);
router.put('/:userId', userController.updateById);

module.exports = router;
