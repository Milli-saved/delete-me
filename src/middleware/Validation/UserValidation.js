const { body } = require("express-validator");

exports.validate = (type) => {
  switch (type) {
    case "SIGNUP":
      return [
        body("firstName").not().isEmpty().withMessage("First name is required"),
        body("lastName").not().isEmpty().withMessage("Last name is required."),
        body("email").isEmail().withMessage("Invalid Email address."),
        body("password").not().isEmpty().withMessage("Password is required."),
        body("accountType")
          .not()
          .isEmpty()
          .withMessage("Account type is required."),
      ];
    case "LOGIN":
      return [
        body("email").isEmail().withMessage("Invalid Email address"),
        body("password").not().isEmpty().withMessage("Password is required"),
      ];
    default:
      return [];
  }
};
