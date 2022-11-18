const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    accountType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

schema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

schema.methods.verifyPassword = async function (inputPassword, userPassword) {
  return await bcrypt.compare(inputPassword, userPassword);
};

const User = mongoose.model("user", schema);
module.exports = User;
