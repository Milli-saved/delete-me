const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    product_name: {
      type: String,
    },
    vendor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vendor",
    },
    type: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", schema);
module.exports = Product;
