import "dotenv/config";
import express from "express";

const app = express();

import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
const PORT = process.env.PORT || 8000;

// use middleware
app.use(express.json()); // used for express, req res
app.use(cors()); // used for import the environment of the application
app.use(helmet()); // by default help prevent attack by 60%-70%
app.use(morgan("dev"));

//server static content
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

// mongoDb connect
import { dbConnect } from "./src/config/dbConfig.js";
dbConnect();

// ROUTERS SECTION
import adminRouter from "./src/routers/adminRouter.js";
import categoryRouter from "./src/routers/categoryRouter.js";
import productRouter from "./src/routers/productRouter.js";
import paymentMethodRouter from "./src/routers/paymentMethodRouter.js";
import { adminAuth } from "./src/middlewares/auth-middlewares/authMiddleware.js";
import customerRouter from "./src/routers/customerRouter.js";
import reviewRouter from "./src/routers/reviewRouter.js";
import orderRouter from "./src/routers/orderRouter.js";

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/category", adminAuth, categoryRouter);
app.use("/api/v1/client/category", categoryRouter);
app.use("/api/v1/products", adminAuth, productRouter);
app.use("/api/v1/payment-method", adminAuth, paymentMethodRouter);
app.use("/api/v1/customers", adminAuth, customerRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/orders", orderRouter);

app.get("/", (req, res) => {
  res.json({
    message: "You have reached the admin API",
  });
});

// ERROR Handling
app.use((error, req, res, next) => {
  res.status(error.status || 400);

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
