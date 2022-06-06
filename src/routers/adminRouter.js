import express from "express";
import { encryptPassword, verifyPassword } from "../../helpers/bcrypthelper.js";
import {
  emailVerificationValidation,
  loginValidation,
  newAdminValidation,
} from "../middlewares/joi-validation/adminValidation.js";
import {
  getAdmin,
  insertAdmin,
  updateAdmin,
} from "../models/admin/Admin.model.js";
import { v4 as uuidv4 } from "uuid";
import { sendMail } from "../../helpers/emailHelper.js";

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

// new Admin Registration
router.post("/", newAdminValidation, async (req, res, next) => {
  try {
    const hashPassword = encryptPassword(req.body.password);
    req.body.password = hashPassword;

    //create unique validation code
    req.body.emailValidationCode = uuidv4();

    const result = await insertAdmin(req.body);

    console.log(result);

    if (result?._id) {
      // create unique URL and send it to the user email

      const url = `${process.env.ROOT_URL}/admin/verify-email/?c=${result.emailValidationCode}&e=${result.email}`;

      // send email to the user
      sendMail({ fName: result.fName, url });

      res.json({
        status: "success",
        message: "Admin successfull created",
      });
    } else {
      res.json({
        status: "error",
        message:
          "Unable to create new admin, Please try again later or contact the admin",
      });
    }
  } catch (error) {
    error.status = 500;
    if (error.message.includes("E11000 duplicate key")) {
      error.message = "Email already exists";
      error.status = 200;
    }
    next(error);
  }
});

// email verification router
router.post(
  "/email-verification",
  emailVerificationValidation,
  async (req, res) => {
    console.log(req.body);
    const filter = req.body;
    const update = { status: "active" };
    const result = await updateAdmin(filter, update);

    if (result?._id) {
      res.json({
        status: "success",
        message: "Your email has been verified. You may login now",
      });

      await updateAdmin(filter, { emailValidationCode: "" });
      // send email to user
      return;
    }
    res.json({
      status: "error",
      message: "Invalid or expired verification link",
    });
  }
);

// Admin login with email and password
// this feature is not completed yet
router.post("/login", loginValidation, async (req, res, next) => {
  //check for the authentication
  try {
    const { email, password } = req.body;

    const user = await getAdmin({ email });

    if (user?._id) {
      const isMatched = verifyPassword(password, user.password);

      console.log(isMatched);
      user.password = undefined;
      //when undefined, api wont send the undefined value
      res.json({
        status: "success",
        message: "User Logged in successfully",
        user,
      });
      return;
    }
    res.status(401).json({
      status: "error",
      message: "Invalid login credentails",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
