const express = require("express");
const { GET_ALL_USERS } = require("../controllers/userController");
const USER = require("../models/userModel");

const router = express.Router();

router.get("", GET_ALL_USERS);

module.exports = router;
