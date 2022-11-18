const express = require("express");
const batchController = require("../db/controller/BatchController");

const router = express.Router();

router.param("id", batchController.params);

router
  .get("/getallbatches", batchController.getAllBatch)
  .post("/addnewbatch", batchController.createNewBatch);

module.exports = router;
