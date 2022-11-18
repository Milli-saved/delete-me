const { body } = require("express-validator");

exports.validate = (type) => {
  switch (type) {
    case "CREATEVENDOR":
      return [
        body("vendor_name")
          .not()
          .isEmpty()
          .withMessage("Vendor name is required."),
        body("vendor_code")
          .not()
          .isEmpty()
          .withMessage("Vendor code is required."),
        body("description")
          .not()
          .isEmpty()
          .withMessage("Description is required."),
      ];
    default:
      return [];
  }
};
