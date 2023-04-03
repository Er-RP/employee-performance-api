const TASK = require("../models/taskModel");
const USER = require("../models/userModel");
const PROJECT = require("../models/projectModel");

const DASHBOARD = async (req, res, next) => {
  try {
    const projects = PROJECT.find({ isActive: true }, "_id isCompleted");
    const tasks = TASK.find({ isActive: true }, "_id status");
    const users = USER.find({ isActive: true }, " _id employeeId");
    const results = await Promise.allSettled([projects, tasks, users]);
    return res.status(200).json({ success: true, results });
  } catch (error) {
    next(error);
  }
};

module.exports = { DASHBOARD };
