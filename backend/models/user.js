const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    added_on: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);


module.exports = mongoose.model("User", userSchema);