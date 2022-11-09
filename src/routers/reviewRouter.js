import express from "express";
import { getRating } from "../fake-db/fakeDB.js";

const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;

    const data = await getRating();

    const reviews = _id ? data.filter((item) => item._id === _id) : data;
    if (reviews) {
      return res.json({
        status: "success",
        message: "ratings list",
        reviews,
      });
    }
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
