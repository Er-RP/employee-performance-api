const {
  NotFoundError,
  UnAuthorizedError,
  CustomError,
} = require("../error_handlers/customErrors");
const PROJECT = require("../models/projectModel");
const USER = require("../models/userModel");

const CREATE = async (req, res, next) => {
  try {
    const payload = req.body;
    const user = await USER.findOneByEmail(req.user.email);
    if (user.role === "HR" || user.role === "Manager") {
      const existingProject = await PROJECT.findOne({ name: payload.name });
      if (existingProject) {
        return next(
          new CustomError("A project with this name already exists", 403)
        );
      }
      const newProject = await PROJECT.create({
        ...payload,
        createdBy: user.id,
      });
      return res.status(201).json({ success: true, project: newProject });
    } else next(new CustomError("forbidden error", 403));
  } catch (err) {
    console.log("error:", err);
    next(err);
  }
};

const GET = async (req, res, next) => {
  try {
    const projectQuery = { isActive: true };
    const projects = await PROJECT.find(projectQuery);
    return res.status(200).json({ success: true, projects });
  } catch (err) {
    next(err);
  }
};

module.exports = { CREATE, GET };
