const express = require("express");
const router = express.Router();
const { CREATE, GET } = require("../controllers/projectController");

router.post("/create", CREATE);
router.get("", GET);

module.exports = router;
