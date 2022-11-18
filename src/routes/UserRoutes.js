const express = require("express");
const userController = require("../db/controller/UserController");
const userValidation = require("../middleware/Validation/UserValidation");

const router = express.Router();

router
  .post("/login", userValidation.validate("LOGIN"), userController.login)
  .post("/signup", userValidation.validate("SIGNUP"), userController.signup);

module.exports = router;
