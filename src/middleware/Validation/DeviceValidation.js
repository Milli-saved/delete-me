const { body } = require("express-validator");

exports.validate = (type) => {
  switch (type) {
    case "CREATENEWDEVICE":
      return [
        body("product_id")
          .not()
          .isEmpty()
          .withMessage("Product ID is required."),
        body("serial_no").not().isEmpty().withMessage("Serial No is required."),
        body("mac_address")
          .not()
          .isEmpty()
          .withMessage("Mac_Address is required."),
        body("quantity").not().isEmpty().withMessage("Quantity is required."),
        body("created_by")
          .not()
          .isEmpty()
          .withMessage("Creator can not be empty."),
        body("vendor_id").not().isEmpty().withMessage("Status is required."),
        body("status").not().isEmpty().withMessage("Box ID is required."),
        body("store_id").not().isEmpty().withMessage("Store ID is required."),
        body("batch_id").not().isEmpty().withMessage("Batch id is required.")
      ];
    default:
      return [];
  }
};
