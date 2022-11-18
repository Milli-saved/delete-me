const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    vendor_name: {
      type: String,
    },
    vendor_code: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Vendor = mongoose.model("vendor", schema);
module.exports = Vendor;
