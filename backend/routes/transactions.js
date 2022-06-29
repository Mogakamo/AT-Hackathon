const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction");

// Create a transaction
router.route("/create").post((req, res, next) => {
    Transaction.create(req.body, (error, data) => {
        if (error) {
        return next(error);
        } else {
        res.json(data);
        console.log("Transaction created!");
        }
    });
    }   
);