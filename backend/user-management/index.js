import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import "./fs.js";

// Database Connection
import dbConnect from "./db/dbConnect.js";
import userRouter from "./route/user.route.js";
import uploadRouter from "./route/upload.route.js";
dbConnect();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", userRouter);
app.use("/upload", uploadRouter);

app.listen(5001, () => {
  console.log("Server is running > http://localhost:5001");
});
