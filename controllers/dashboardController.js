const TASK = require("../models/taskModel");
const USER = require("../models/userModel");
const PROJECT = require("../models/projectModel");

const DASHBOARD = async (req, res, next) => {
  try {
    let projects = [];
    let tasks = [];
    let users = [];
    try {
      projects = await PROJECT.find({ isActive: true }, "_id isCompleted");
      tasks = await TASK.find({ isActive: true }, "_id status");
      users = await USER.find(
        { isActive: true, role: { $in: ["EMPLOYEE", "MANAGER"] } },
        " _id employeeId firstName lastName fullName"
      );
    } catch (err) {
      console.log("dashboard error: ", err);
    }

    return res.status(200).json({ success: true, projects, tasks, users });
  } catch (error) {
    next(error);
  }
};

module.exports = { DASHBOARD };
