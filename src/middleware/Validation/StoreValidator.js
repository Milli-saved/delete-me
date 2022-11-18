const { body } = require("express-validator");

exports.validate = (type) => {
  switch (type) {
    case "CREATENEWSTORE":
      return [
        body("store_name")
          .not()
          .isEmpty()
          .withMessage("Store name is required."),
        body("latitude").not().isEmpty().withMessage("Latitude is required."),
        body("longtude").not().isEmpty().withMessage("Longtude is required."),
        body("location").not().isEmpty().withMessage("Location is required."),
      ];
    default:
      return [];
  }
};
