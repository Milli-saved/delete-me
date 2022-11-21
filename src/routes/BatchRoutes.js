const express = require("express");
const batchController = require("../db/controller/BatchController");
const { verifyUser } = require("../middleware/auth");

const router = express.Router();

router.param("id", batchController.params);

router
  .get("/getallbatches", verifyUser, batchController.getAllBatch)
  .post("/addnewbatch", batchController.createNewBatch);

module.exports = router;
