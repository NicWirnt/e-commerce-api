import express from "express";
import { newAdminValidation } from "../middlewares/joi-validation/adminValidation.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "GET hit to admin Router",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", newAdminValidation, (req, res) => {
  res.json({
    status: "success",
    message: "POST hit to admin Router",
  });
});

router.patch("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "PATCH hit to admin Router",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
