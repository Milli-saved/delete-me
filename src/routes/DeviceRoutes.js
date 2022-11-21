const express = require("express");
const deviceController = require("../db/controller/DeviceController");
const { validate } = require("../middleware/Validation/DeviceValidation");
const { verifyUser } = require("../middleware/auth");

const router = express.Router();

router.param("id", deviceController.params);

router
  .get("/alldevices", verifyUser, deviceController.getAllDevices)
  .post(
    "/addnewdevice",
    verifyUser,
    validate("CREATENEWDEVICE"),
    deviceController.addNewDevice
  );

router.route("/:id").delete(verifyUser, deviceController.deleteDevice);

module.exports = router;
