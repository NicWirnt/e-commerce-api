import "dotenv/config";
import express from "express";

const app = express();

import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const PORT = process.env.PORT || 8000;

// use middleware
app.use(express.json()); // used for express, req res
app.use(cors()); // used for import the environment of the application
app.use(helmet()); // by default help prevent attack by 60%-70%
app.use(morgan("dev"));

// mongoDb connect
import { dbConnect } from "./src/config/dbConfig.js";
dbConnect();

// ROUTERS SECTION
app.get("/", (req, res) => {
  res.json({
    message: "You have reached the admin API",
  });
});

// ERROR Handling
app.use((err, req, res, next) => {
  console.log(err);
  res.json({
    status: "error",
    message: error.message,
  });
});

// bound the APP with the port to serve on INTERNET
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server is running on http://localhost:${PORT}`);
});
