const express = require("express");
const { CREATE } = require("../controllers/taskController");

const router = express.Router();

router.post("/create", CREATE);

module.exports = router;
