const { body } = require("express-validator");

exports.validate = (type) => {
  switch (type) {
    case "CREATENEWPRODUCT":
      return [
        body("product_name")
          .not()
          .isEmpty()
          .withMessage("Product Name is required."),
        body("vendor_id").not().isEmpty().withMessage("Vendor ID is required."),
        body("type").not().isEmpty().withMessage("Type is required."),
        body("description")
          .not()
          .isEmpty()
          .withMessage("Description is required."),
      ];
    default:
      return [];
  }
};
