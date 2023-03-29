const express = require("express");
const { CREATE,GET_TASK_BY_ID } = require("../controllers/taskController");

const router = express.Router();

router.post("/create", CREATE);
router.get("/:id", GET_TASK_BY_ID);

module.exports = router;
