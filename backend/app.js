const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/appError");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes

app.use("/api/v1", userRouter);
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `This Resources ${req.originalUrl} doesn't exists on this server!`,
      404
    )
  );
});

//error handling
app.use((err, req, res, next) => {
  console.log(err);

  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Something Went Wrong";

  res.status(err.statusCode).json({
    status: "error",
    message: err.message,
  });
});

module.exports = app;
