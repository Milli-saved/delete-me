const express = require("express");
const VendorValidation = require("../middleware/Validation/VendorValidation");
const vendorController = require("../db/controller/VendorController");

const router = express.Router();

router
  .get("/getallvendor", vendorController.getAllVendors)
  .post(
    "/createnewvendor",
    VendorValidation.validate("CREATEVENDOR"),
    vendorController.createNewVendor
  );

module.exports = router;
