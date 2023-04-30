import express from "express";
import { createOrders } from "../fake-db/fakeDB.js";

const router = express.Router();

router.get("/:_id?", (req, res, next) => {
  try {
    const { _id } = req.params;

    const data = createOrders();

    const orders = _id ? data.filter((item) => item._id === _id) : data;
    if (orders) {
      return res.json({
        status: "success",
        message: "orders list",
        orders,
      });
    }
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    const data = req.body;
  } catch (error) {
    error.status = 400;
    next(error);
  }
});

export default router;
