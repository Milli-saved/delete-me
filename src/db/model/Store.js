const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    store_name: {
      type: String,
    },
    latitude: {
      type: String,
    },
    longtude: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model("store", schema);

module.exports = Store;
