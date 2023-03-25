const TASK = require("../models/taskModel");

const CREATE = async (req, res, next) => {
  try {
    const payload = req.body;
    const newTask = await TASK.create(payload);
    return res.status(201).json({ success: true, task: newTask });
  } catch (err) {
    next(err);
  }
};

module.exports = { CREATE };
