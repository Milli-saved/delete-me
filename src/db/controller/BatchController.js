const Batch = require("../model/Batch");

exports.params = async (req, res, next, reqId) => {
  const batch = await Batch.findById(reqId);
  if (!batch) {
    next(new Error("No batch found with this ID"));
  } else {
    req.batch = batch;
    next();
  }
};

exports.createNewBatch = async (req, res, next) => {
  try {
    const batch = await Batch.create(req.body);
    res.status(200).json({
      status: "successfully added new batch",
      batch,
    });
  } catch (err) {
    res.status(400).json({
      status: "error while trying to add new batch.",
      error: err,
    });
  }
};

exports.getAllBatch = async (req, res, next) => {
  try {
    let batch = await Batch.find({}).populate("creator store_id product_id");
    res.status(200).json({
      status: "successfully fetched all batches.",
      batch,
    });
  } catch (err) {
    res.status(400).json({
      status: "error wile fetching all batch",
      error: err,
    });
  }
};

