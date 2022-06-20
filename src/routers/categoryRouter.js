import express from "express";
import { newCategoryValidation } from "../middlewares/joi-validation/productCategoryValidation.js";
import {
  deleteCatById,
  getAllCategories,
  getCategories,
  getCategory,
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
    const result = await getAllCategories(filter);

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

router.delete("/", async (req, res, next) => {
  try {
    const { _id } = req.body;
    const filter = { parentCatId: _id };

    const childCats = await getCategories(filter);

    if (childCats.length) {
      res.json({
        status: "error",
        message:
          "There is a dependent category to this parent Category, please relocate child category to another category and proceed to delete this category",
      });
      return;
    } else {
      const result = await deleteCatById(_id);
      result?._id
        ? res.json({
            status: "success",
            message: "Category successfully deleted",
          })
        : res.json({
            status: "error",
            message: "Unable to delete, please try again later",
          });
    }
  } catch (error) {
    next(error);
  }
});

//update Category
router.put("/", newCategoryValidation, async (req, res, next) => {
  try {
    const { _id, ...rest } = req.body;

    const result = await updateCategoryById(_id, rest);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "Category Successfully updated",
        })
      : res.json({
          status: "error",
          message: "Unable to update the category, please try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
