const TASK = require("../models/taskModel");
const USER = require("../models/userModel");
const PROJECT = require("../models/projectModel");

const CREATE = async (req, res, next) => {
  try {
    const payload = req.body;
    const user = await USER.findOneByEmail(req.user.email);
    const newTask = await TASK.create({
      ...payload,
      createdBy: user.id,
    });
    const projectID = payload.project;
    await PROJECT.findByIdAndUpdate(
      projectID,
      {
        $push: {
          tasks: newTask?.id,
        },
      },
      { new: true }
    );
    return res.status(201).json({ success: true, task: newTask });
  } catch (err) {
    next(err);
  }
};

const GET = async (req, res) => {
  try {
    const user = await USER.findOneByEmail(req.user.email);
    const payload = { isActive: true };
    if (user?.role == "EMPLOYEE") {
      payload.assignee = user?.id;
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { CREATE };
