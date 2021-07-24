const userController = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.get("", userController.findAll);
router.post("", userController.create);
router.delete("/:userId", userController.deleteById);
router.put("/:userId", userController.updateById);

module.exports = router;