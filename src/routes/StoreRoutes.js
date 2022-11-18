const express = require("express");
const storeController = require("../db/controller/StoreController");
const storeValidator = require("../middleware/Validation/StoreValidator");

const router = express.Router();

router.param("id", storeController.params);

router
  .get("/getallstore", storeController.getAllStore)
  .post(
    "/createnewstore",
    storeValidator.validate("CREATENEWSTORE"),
    storeController.createNewStore
  );

router.route("/:id").delete(storeController.deleteStore);

module.exports = router;
