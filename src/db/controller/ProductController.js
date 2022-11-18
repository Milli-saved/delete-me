const Product = require("../model/Product");
const { validationResult } = require("express-validator");

exports.params = async (req, res, next, reqId) => {
  const product = await Product.findById(reqId);
  if (!product) {
    next(new Error("No Product is found with this ID"));
  } else {
    req.product = product;
    next();
  }
};

exports.createNewProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "Error from Validator of Create New Product.",
        message: errors.array()[0].msg,
      });
    } else {
      const product = await Product.create(req.body);
      res.status(200).json({
        status: "Successfully added new Product.",
        product,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Error in Create New Product.",
      message: err,
    });
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    let result = await Product.find({}).populate("vendor_id");
    res.status(200).json({
      status: "Successfully fetched all Products.",
      products: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error in Get All Products.",
      message: err,
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    req.product.remove().then((removed) => {
      res.status(200).json({
        status: "Product deleted Successfully.",
        message: "Done",
      });
    });
  } catch (err) {
    res.status(400).json({
      status: "Error in Delete Product.",
      message: err,
    });
  }
};
