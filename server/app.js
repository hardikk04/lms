import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

// DB CONNECTION
import dbConnection from "./db/dbConnection.js";
dbConnection();

// Routes imports
import userRoute from "./routes/user-route.js";

const app = express();

// Default Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Apis

app.use("/api/v1/user", userRoute);

// Server check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "EVERTHING IS GOOD",
  });
});

// Server Listen to Port
app.listen(process.env.PORT || 5000, () => {
  console.log(`SERVER IS RUNNING ON ${process.env.PORT}`);
});
