const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    serial_no: {
      type: String,
    },
    mac_address: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    vendor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vendor",
    },
    status: {
      type: String,
    },
    store_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
    },
    batch_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "batch",
    },
  },
  {
    timestamps: true,
  }
);

const Device = mongoose.model("device", schema);
module.exports = Device;
