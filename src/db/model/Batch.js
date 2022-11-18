const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    batch_code: {
      type: String,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    store_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    added_to_store: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Batch = mongoose.model("batch", schema);

module.exports = Batch;
