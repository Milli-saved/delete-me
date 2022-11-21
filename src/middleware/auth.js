const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../db/model/User");

exports.verifyUser = async (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("danenergy")
    ) {
      return res.status(400).json({
        status: "error can not find the token",
        data: "You are not logged in.",
      });
    } else {
      const token = req.headers.authorization.split(" ")[1];
      const verifyToken = promisify(jwt.verify);

      const { id } = await verifyToken(token, "danenergy");
      const user = await User.findById(id);
      req.user = user;
      next();
    }
  } catch (err) {
    res.status(400).json({
      status: "error while verifying user.",
      error: err.message,
    });
  }
};
