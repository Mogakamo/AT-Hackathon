const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Roles
const roles = ["admin", "user"];

/**
 * User Schema
 * @private
 */
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 128,
    },
    role: {
      type: String,
      enum: roles,
      default: "user",
    },
    balance: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true },
  {
    collection: "users",
  }
);

// Hash the password before saving
userSchema.pre(
  "save",
  (save = async (next) => {
    try {
      if (!this.isModified("password")) return next();

      const rounds = env === "test" ? 1 : 10;

      // const hash =
    } catch (err) {
      return next(error);
    }
  })
);
module.exports = mongoose.model("User", userSchema);
