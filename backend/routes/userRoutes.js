const express = require('express');

const router = express.Router();

const {adminOnly, protect} = require("../middlewares/authMiddleware");

const {getUsers, getUserById, deleteUser} = require("../controllers/userController");



router.get("/", protect, adminOnly, getUsers);
router.get("/:id", protect, getUserById);
router.delete("/:id", protect, adminOnly, deleteUser);

module.exports = router;


