import express from "express";
import cors from "cors";

import UserRoutes from "./routes/user.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/upload", UserRoutes);

// Handling Route not found error.
app.use((req, res, next) => {
  const error = new Error(`Not Fount - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// default error handler by express.
app.use((error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let { message } = error || "Something went wrong. Please try again letter";

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? "" : error.stack,
  });
});

app.listen(port, () => {
  console.log(`Server is Running on port https://localhost:${port}`);
});
