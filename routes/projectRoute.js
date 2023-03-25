const express = require("express");
const router = express.Router();
const { CREATE } = require("../controllers/projectController");


router.post("/create",CREATE);

module.exports = router;
