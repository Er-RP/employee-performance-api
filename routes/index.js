const express = require("express");
const { authenticateUser } = require("../utils/token");
const router = express.Router();

router.use("/auth", require("./authRoute"));
router.use("/users", authenticateUser, require("./userRoute"));

module.exports = router;
