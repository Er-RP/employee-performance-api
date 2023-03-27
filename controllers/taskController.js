const TASK = require("../models/taskModel");
const USER = require("../models/userModel");

const CREATE = async (req, res, next) => {
  try {
    const payload = req.body;
    const user = await USER.findOneByEmail(req.user.email);
    const newTask = await TASK.create({
      ...payload,
      createdBy: user.id,
    });
    return res.status(201).json({ success: true, task: newTask });
  } catch (err) {
    next(err);
  }
};

module.exports = { CREATE };
