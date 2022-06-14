import express from "express";
import { newCategoryValidation } from "../middlewares/joi-validation/productCategoryValidation.js";
import {
  getCategories,
  insertCategory,
  updateCategoryById,
} from "../models/category/Category.models.js";
import slugify from "slugify";

const router = express.Router();
router.post("/", newCategoryValidation, async (req, res, next) => {
  try {
    const slug = slugify(req.body.catName, {
      lower: true,
      trim: true,
    });

    const result = await insertCategory({ ...req.body, slug });
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "New Category has been added!",
        })
      : res.json({
          status: "error",
          message: "Unable to add the category, please try again later",
        });
  } catch (error) {
    console.log(error);
    error.status = 500;
    if (error.message.includes("E11000 duplicate key")) {
      error.status = 200;
      error.message =
        "This Category has already exist, please change the name to new category";
    }
    next(error);
  }
});

//return all active categories
router.get("/", async (req, res, next) => {
  try {
    const filter = { status: "active" };
    const result = await getCategories(filter);

    res.json({
      status: "success",
      message: "Categories result",
      result,
    });
  } catch (error) {
    next(error);
  }
});

//update status of a category
router.patch("/", async (req, res, next) => {
  try {
    const { _id, status } = req.body;

    if (!_id || !status) {
      throw new Error("invalid Data set");
    }

    const result = await updateCategoryById(_id, { status });

    result?._id
      ? res.json({
          status: "success",
          message: "Categories result",
          result,
        })
      : res.json({
          status: "error",
          message: "unable to update the category, try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
