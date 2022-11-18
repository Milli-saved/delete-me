const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const getToken = (id) => {
  return jwt.sign({ id }, "websprix", {
    expiresIn: "1h",
  });
};

/**
 * GET ALL USERS
 * ADD NEW USER
 * GET ONE USER
 * DELETE USER
 * LOGIN
 */

/**
 * LOGIN
 */

exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.status(400).json({
        status: "Validation Error in Login",
        error: errors.array()[0].msg,
      });
    } else {
      const user = await User.findOne({ email: req.body.email }).select(
        "+password"
      );
      if (
        !user ||
        !(await user.verifyPassword(req.body.password, user.password))
      ) {
        res.status(401).json({
          status: "Error while logging in",
          message: "Invalid email or password",
        });
      } else {
        const token = getToken(user._id);
        res.status(200).json({
          status: "Successfully Signed In",
          token,
          user,
        });
      }
    }
  } catch (err) {
    res.status(400).json({
      status: "Error in login function",
      error: err,
    });
  }
};

/**
 * SIGNUP
 */

exports.signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "Validation Error in Signup",
        error: errors.array()[0].msg,
      });
    } else {
      const user = await User.create(req.body);
      const token = getToken(user._id);
      res.status(201).json({
        status: "Successfully added new user",
        token,
        user,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Error in signup function",
      error: err,
    });
  }
};
