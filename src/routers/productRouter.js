import express from "express";
import slugify from "slugify";
import { newProductValidation } from "../middlewares/joi-validation/productCategoryValidation.js";
import {
  deleteProduct,
  getAllProducts,
  insertProduct,
} from "../models/product/Product.model.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllProducts();
    result?.length
      ? res.json({
          status: "success",
          message: "Product get router hit",
          result,
        })
      : res.json({
          status: "error",
          message: "Failed fetching all products, please try again later",
        });
  } catch (error) {
    next(error);
  }
});

router.post("/", newProductValidation, async (req, res, next) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    const slug = slugify(name, { trim: true, lower: true });
    req.body.slug = slug;
    const result = await insertProduct(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New product has been created",
        })
      : res.json({
          status: "error",
          message: "Error creating new product, please try again later",
        });
  } catch (error) {
    // duplicate slug and the SKU
    if (error.message.includes("E11000 duplicate key")) {
      error.status = 200;
      error.message =
        "Another product with similar either Name or SKU already exist";
    }
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const result = await deleteProduct(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "Product deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Error deleting product, please try again later",
        });
  } catch (error) {
    next(error);
  }
});
export default router;

router.patch("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "Product patch router hit",
    });
  } catch (error) {
    next(error);
  }
});
