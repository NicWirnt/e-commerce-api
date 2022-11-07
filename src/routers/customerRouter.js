import express from "express";
import { getCustomer } from "../fake-db/fakeDB.js";

const router = express.Router();

//fake data that need to be updated when frontend is completed

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;

    const { data } = await getCustomer(_id);

    if (data) {
      res.json({
        status: "success",
        message: "Customer list",
        customers: data,
      });
    }
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
