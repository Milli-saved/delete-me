const Device = require("../model/Devices");
const { validationResult } = require("express-validator");

exports.params = (req, res, next, reqId) => {
  Device.findById(reqId).then((device) => {
    if (!device) {
      next(new Error("NO device found"));
    } else {
      req.device = device;
      next();
    }
  });
};

exports.addNewDevice = async (req, res, next) => {
  try {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      status: "error from the validator of create new device",
      message: errors.array()[0].msg,
    });
  } else {
  const device = await Device.create(req.body);
  res.status(200).json({
    status: "successfully added new device",
    device,
  });
  }
  } catch (err) {
    res.status(400).json({
      status: "error while adding new device",
      error: err,
    });
  }
};

exports.getAllDevices = async (req, res, next) => {
  try {
    let result = await Device.find({}).populate(
      "product_id created_by vendor_id store_id batch_id "
    );
    if (result == 0) {
      res.status(200).json({
        status: "Error while looking for devices",
        message: "No Device Found",
      });
    } else {
      res.status(200).json({
        status: "Successfully Fetched devices",
        devices: result,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Error in get all devices.",
      message: err,
    });
  }
};

exports.deleteDevice = async (req, res, next) => {
  try {
    const result = await req.device.remove();
    res.status(200).json({
      status: "Successfully deleted Device.",
      message: "Done",
    });
  } catch (err) {
    res.status(400).json({
      status: "Error in deleteing Devices.",
      message: err,
    });
  }
};
