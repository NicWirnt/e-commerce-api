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

//Multer setup for File upload for validation and upload destination
import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let error = null;

    cb(error, "./public/img/products");
  },
  filename: (req, file, cb) => {
    const fullFileName = Date.now() + "-" + file.originalname;
    cb(null, fullFileName);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;

    const products = _id
      ? await getProduct({ _id })
      : await getMultipleProducts();

    res.json({
      status: "success",
      message: "Product List",
      products,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post(
  "/",
  upload.array("images", 5),
  newProductValidation,
  async (req, res, next) => {
    try {
      const files = req.files;

      const images = files.map((img) => img.path);

      const { name } = req.body;
      const slug = slugify(name, { trim: true, lower: true });
      req.body.slug = slug;

      const result = await insertProduct({
        ...req.body,
        images,
        thumbnail: images[0],
      });

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
  }
);

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

router.put(
  "/",
  upload.array("newImages", 5),
  updateProductValidation,
  async (req, res, next) => {
    try {
      const { _id, imgToDelete, ...rest } = req.body;

      //1. make new array for the images and replace in the database
      const files = req.files;

      const images = files.map((img) => img.path); // new images
      const oldImgList = rest.images.split(","); // old images from database
      // imgToDelete holds the iages that is in the oldImgList that need to be removed

      //remove deleted image from oldImageList
      const filteredImages = oldImgList.filter(
        (img) => !imgToDelete.includes(img)
      );

      rest.images = [...filteredImages, ...images];
      //2. delete image from the file system
      const result = await updateProductById(_id, rest);

      result?._id
        ? res.json({
            status: "success",
            message: "Product has been updated",
            result,
          })
        : res.json({
            status: "error",
            message: "Unable to update the product, please try again later",
          });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
