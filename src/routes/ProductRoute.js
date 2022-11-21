const express = require("express");
const productValidation = require("../middleware/Validation/ProductValidation");
const productController = require("../db/controller/ProductController");
const { verifyUser } = require("../middleware/auth");

const router = express.Router();

router.param("id", productController.params);

router
  .get("/allproducts", verifyUser, productController.getAllProducts)
  .post(
    "/createnewproduct",
    verifyUser,
    productValidation.validate("CREATENEWPRODUCT"),
    productController.createNewProduct
  );

router.route("/:id").delete(productController.deleteProduct);

module.exports = router;
