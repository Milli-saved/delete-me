const Store = require("../model/Store");
const { validationResult } = require("express-validator");

exports.params = async (req, res, next, reqId) => {
  const store = await Store.findById(reqId);
  if (!store) {
    next(new Error("No Store with this Id."));
  } else {
    req.store = store;
    next();
  }
};

exports.createNewStore = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "Validation error while creating Store.",
        message: errors.array()[0].msg,
      });
    } else {
      const store = await Store.create(req.body);
      res.status(200).json({
        status: "Successfully added new Store.",
        store,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Error while creating new store.",
      message: err,
    });
  }
};

exports.getAllStore = async (req, res, next) => {
  try {
    let result = await Store.find({});
    res.status(200).json({
      status: "Successfully fetched all Store.",
      store: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error while fetching store",
      message: err,
    });
  }
};

exports.deleteStore = async (req, res, next) => {
  try {
    req.store.remove().then(() => {
      res.status(200).json({
        status: "Successfully deleted Store",
        message: "Done",
      });
    });
  } catch (err) {
    res.status(400).json({
      status: "Error while deleting Store",
      message: err,
    });
  }
};
