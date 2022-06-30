const mongoose = require("mongoose");
const User = require("../models/user");

// Types of operations
const operations = ["deposit", "withdrawal", "transfer", "fee"];

const transactionSchema = new mongoose.Schema(
  {
    operation: {
      type: String,
      required: true,
      enum: operations,
    },
    accountNumber: {
      type: "Number",
      ref: "User",
      required: true,
    },
    destinationAccountNumber: {
      type: "Number",
      ref: "User",
    },
    amount: {
      type: Number,
      required: true,
      default: 0,
    },
    reference: {
      type: String,
    },
  },
  { timestamps: true }
);



module.exports = mongoose.model("Transaction", transactionSchema);
