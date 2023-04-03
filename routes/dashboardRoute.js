const express = require("express");
const { DASHBOARD } = require("../controllers/dashboardController");

const router = express.Router();

router.get("", DASHBOARD);

module.exports = router;
