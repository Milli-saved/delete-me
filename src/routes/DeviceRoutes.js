const express = require("express");
const deviceController = require("../db/controller/DeviceController");
const { validate } = require("../db/model/Devices");

const router = express.Router();

router.param("id", deviceController.params);

router.get("/alldevices", deviceController.getAllDevices).post(
  "/addnewdevice",
  // validate("CREATENEWDEVICE"),
  deviceController.addNewDevice
);

router.route("/:id").delete(deviceController.deleteDevice);

module.exports = router;
