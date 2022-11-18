const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
// const morgan = require('morgan')

const app = express();

// ROUTES

const userRouter = require("./routes/UserRoutes");
const vendorRouter = require("./routes/VendorRoutes");
const productRouter = require("./routes/ProductRoute");
const storeRouter = require("./routes/StoreRoutes");
const batchRouter = require("./routes/BatchRoutes");
const deviceRouter = require("./routes/DeviceRoutes");

// CONNECTION TO DATABASE
mongoose
  .connect("mongodb://127.0.0.1:27017/storemgmt")
  .then(() => {
    console.log("Connected to database successfully.");
  })
  .catch((err) => console.log("error while connecting to DB", err));

// MIDDLEWARES
// if(process.env.NODE_ENV == "development"){
//     app.use(morgan("dev"))
// }
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/v1/user", userRouter);
app.use("/api/v1/vendor", vendorRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/store", storeRouter);
app.use("/api/v1/batch", batchRouter);
app.use("/api/v1/device", deviceRouter)

app.use("*", (req, res, next) => {
  res.status(400).json({
    status: "error",
    message: `The requested url ${req.orignalURL} doesn't exist.`,
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
