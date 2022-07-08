import express from "express";
import {
  deletePaymentMethodById,
  getAllPaymentMethods,
  getPaymentMethods,
  insertPaymentMethod,
  updatePaymentMethodById,
} from "../models/payment-methods/paymentMethod.model.js";

const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;

    const result = _id
      ? await getPaymentMethods(_id)
      : await getAllPaymentMethods();
    console.log(result);
    result?.length
      ? res.json({
          status: "success",
          message: "Showing all the payment methods avaiable",
          result,
        })
      : res.json({
          status: "error",
          message: "unable to get all payment methods, please try again later",
          result,
        });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await insertPaymentMethod(req.body);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "Payment Method successfully added!!",
      });
    }
    res.json({
      status: "error",
      message: "Failed to add payment method",
    });
  } catch (error) {
    error.status = 500;
    if (error.message.includes("E11000 duplicate key")) {
      error.status = 200;
      error.message =
        "This payment method has already exist, please change the name of new method";
    }
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const { _id, ...rest } = req.body;

    if (typeof _id === "string") {
      const result = await updatePaymentMethodById(_id, rest);

      if (result?._id) {
        return res.json({
          status: "success",
          message: "The payment method has been updated successfully",
        });
      }
    }
    res.json({
      status: "error",
      message: "Unable to update the payment method, please try again later",
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    if (_id) {
      const result = await deletePaymentMethodById(_id);
      if (result?._id) {
        return res.json({
          status: "success",
          message: "Payment method has been deleted",
        });
      }
    }
    res.json({
      status: "error",
      message: "Unable to delete the payment method, please try again later",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
