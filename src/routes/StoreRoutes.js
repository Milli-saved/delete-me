const express = require("express");
const storeController = require("../db/controller/StoreController");
const { verifyUser } = require("../middleware/auth");
const storeValidator = require("../middleware/Validation/StoreValidator");

const router = express.Router();

router.param("id", storeController.params);

router
  .get("/getallstore", verifyUser, storeController.getAllStore)
  .post(
    "/createnewstore",
    verifyUser,
    storeValidator.validate("CREATENEWSTORE"),
    storeController.createNewStore
  );

router.route("/:id").delete(verifyUser, storeController.deleteStore);

module.exports = router;
