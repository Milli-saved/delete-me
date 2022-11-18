const express = require("express");
const productValidation = require("../middleware/Validation/ProductValidation");
const productController = require("../db/controller/ProductController");

const router = express.Router();

router.param("id", productController.params);

router
  .get("/allproducts", productController.getAllProducts)
  .post(
    "/createnewproduct",
    productValidation.validate("CREATENEWPRODUCT"),
    productController.createNewProduct
  );

router.route("/:id").delete(productController.deleteProduct);

module.exports = router;
