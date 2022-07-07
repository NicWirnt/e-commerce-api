import express from "express";
import slugify from "slugify";
import {
  newProductValidation,
  updateProductValidation,
} from "../middlewares/joi-validation/productCategoryValidation.js";
import {
  deleteMultiProducts,
  deleteProduct,
  getAllProducts,
  getMultipleProducts,
  getProduct,
  insertProduct,
  updateProductById,
} from "../models/product/Product.model.js";

const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;

    const result = _id
      ? await getProduct({ _id })
      : await getMultipleProducts();

    res.json({
      status: "success",
      message: "Product List",
      result,
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
    const ids = req.body;
    if (ids.length) {
      const result = await deleteMultiProducts(req.body);
      if (result?.deletedCount) {
        return res.json({
          status: "success",
          message: "Selected products deleted successfully",
        });
      }
    }

    res.json({
      status: "error",
      message: "Error deleting product, please try again later",
    });
  } catch (error) {
    next(error);
  }
});

router.put("/", updateProductValidation, async (req, res, next) => {
  try {
    const { _id, ...rest } = req.body;
    const result = await updateProductById({ _id }, rest);

    result?._id
      ? res.json({
          status: "success",
          message: "Product has been updated",
        })
      : res.json({
          status: "error",
          message: "Unable to update the product, please try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
