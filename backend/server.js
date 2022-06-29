const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./db/database");

// Connecting to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(db.db, { useNewUrlParser: true }).then(
  () => {
    console.log("Connected to MongoDB");
  },
  (error) => {
    console.log("Error connecting to MongoDB: " + error);
  }
);

// Express setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// API root
const userRoute = require("./routes/user");
app.use("/users", apiRoutes);

// Port
const port = process.env.PORT || 4010;
app.listen(port, () => {
  console.log("Port connected to: " + port);
});

// Find 404 and hand over to error handler
app.use(
  (req, res, next) => {
    next(createError(404));
  } // end of 404 handler
);

// Index route
app.get(
  "/",
  (req, res) => {
    res.send("Invalid endpoint");
  } // end of index route
);

// Error handler
app.use(
  (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  } // end of error handler
);

// Static build location
app.use(express.static(path.join(__dirname, "dist")));
