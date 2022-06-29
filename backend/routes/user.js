const express = require("express");
const router = express.Router();
const User = require("../models/user");

// GET all users
router.route("/").get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// GET one user
router.route("/users/:id").get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Create a user
router.route("/users/create").post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log("User created!");
    }
  });
});

// Update a user
router.route("/users/update/:id").put((req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log("User updated successfully");
    }
  });
});

// Delete a user
router.route("/users/delete/:id").delete((req, res, next) => {
  User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ msg: "Successfully deleted user!" });
    }
  });
}); // end of delete user

module.exports = router;