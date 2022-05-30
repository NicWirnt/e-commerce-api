import express from "express";
import { encryptPassword } from "../../helpers/bcrypthelper.js";
import { newAdminValidation } from "../middlewares/joi-validation/adminValidation.js";
import { insertAdmin } from "../models/admin/Admin.model.js";

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

router.post("/", newAdminValidation, async (req, res, next) => {
  try {
    const hashPassword = encryptPassword(req.body.password);
    req.body.password = hashPassword;
    const result = await insertAdmin(req.body);

    console.log(result);

    result?._id
      ? res.json({
          status: "success",
          message: "POST hit to admin Router",
        })
      : res.json({
          status: "error",
          message:
            "Unable to create new admin, Please try again later or contact the admin",
        });
  } catch (error) {
    error.status = 500;
    if (error.message.includes("E11000 duplicate key")) {
      error.message = "Email already exists";
      error.status = 200;
    }
    next(error);
  }
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
