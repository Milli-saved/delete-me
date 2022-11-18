const Vendor = require("../model/Vendors");
const { validationResult } = require("express-validator");

/**
 * GET ALL VENDORS
 * ADD NEW VENDOR
 * DELETE VENDOR
 * UPDATE VENDOR
 */

exports.createNewVendor = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "Error from the validator",
        message: errors.array()[0].msg,
      });
    } else {
      const vendor = await Vendor.create(req.body);
      res.status(201).json({
        status: "Sucessfully added new Vendor",
        vendor,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Error in Create new Vendor function",
    });
  }
};

exports.getAllVendors = async (req, res, next) => {
  try {
    const result = await Vendor.find({});
    res.status(200).json({
      status: "Successfully loaded all Vendors.",
      vendors: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error in get All Vendors.",
      message: err,
    });
  }
};

// exports.updateVendor = async (req, res, next) => {
//   try {

//   } catch (err) {
//     res.status(400).json({
//       status: "Error in update vendor",
//       message: err,
//     });
//   }
// };

exports.deleteVendor = async (req, res, next) => {
  try {
    const result = await req.vendor.remove();
    res.status(200).json({
      status: "successfully deleted vendor.",
      message: "Done",
    });
  } catch (err) {
    res.status(400).json({
      status: "Error in delete vendor function",
      message: err,
    });
  }
};
