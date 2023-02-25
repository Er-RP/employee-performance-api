const {
  NotFoundError,
  UnAuthorizedError,
} = require("../error_handlers/customErrors");
const USER = require("../models/userModel");

const REGISTER = async (req, res, next) => {
  try {
    const payload = req.body;
    const newUser = await USER.create(payload);
    return res.status(201).json(newUser);
  } catch (err) {
    console.log("Error : ", err);
    next(err);
  }
};

const LOGIN = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const isUserFound = await USER.findOneByEmail(email);
    if (isUserFound) {
      if (!isUserFound.isActive) {
        next(new UnAuthorizedError("Account is not active"));
      } else {
        const isPasswordMatch = await isUserFound.checkPasswordMatch(password);
        if (isPasswordMatch) {
          return res.json({ success: true });
        } else {
          next(new UnAuthorizedError("Password is incorrect"));
        }
      }
    } else {
      next(new NotFoundError("Email not found"));
    }
    const newUser = await USER.create(payload);
    return res.status(201).json(newUser);
  } catch (err) {
    console.log("Error : ", err);
    next(err);
  }
};

const GET = async (req, res, next) => {};
const UPDATE = async (req, res, next) => {};

module.exports = { REGISTER, LOGIN };
