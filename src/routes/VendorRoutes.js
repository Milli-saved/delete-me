const express = require("express");
const VendorValidation = require("../middleware/Validation/VendorValidation");
const vendorController = require("../db/controller/VendorController");
const { verifyUser } = require("../middleware/auth");

const router = express.Router();

router
  .get("/getallvendor", verifyUser, vendorController.getAllVendors)
  .post(
    "/createnewvendor",
    verifyUser,
    VendorValidation.validate("CREATEVENDOR"),
    vendorController.createNewVendor
  );

module.exports = router;
