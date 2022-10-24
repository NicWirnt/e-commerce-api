import express from "express";
import { encryptPassword, verifyPassword } from "../helpers/bcrypthelper.js";
import {
  emailVerificationValidation,
  loginValidation,
  newAdminValidation,
  updateAdminValidation,
  updatePasswordValidation,
} from "../middlewares/joi-validation/adminValidation.js";
import {
  getAdmin,
  insertAdmin,
  updateAdmin,
} from "../models/admin/Admin.model.js";
import { v4 as uuidv4 } from "uuid";
import {
  otpNotificaiton,
  profileUpdateNotificaiton,
  sendMail,
} from "../helpers/emailHelper.js";
import { createOtp } from "../helpers/randomGeneratorHelper.js";
import {
  deleteSession,
  getSession,
  insertSession,
} from "../session/SessionModel.js";
import {
  createJWTs,
  signAccessJwt,
  verifyRefreshjwt,
} from "../helpers/jwtHelper.js";
import { adminAuth } from "../middlewares/auth-middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", adminAuth, (req, res) => {
  try {
    let user = req.adminInfo;

    user.password = undefined;
    user.refreshJWT = undefined;

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
router.post("/", adminAuth, newAdminValidation, async (req, res, next) => {
  try {
    const hashPassword = encryptPassword(req.body.password);
    req.body.password = hashPassword;

    //create unique validation code
    req.body.emailValidationCode = uuidv4();

    const result = await insertAdmin(req.body);

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

// update admin profile
router.put("/", adminAuth, updateAdminValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await getAdmin({ email });

    if (user?._id) {
      const isMatched = verifyPassword(password, user.password);

      if (isMatched) {
        //update user
        const { _id, password, ...rest } = req.body;
        const updatedAdmin = await updateAdmin({ _id }, rest);
        if (updatedAdmin?._id) {
          //send email notification saying profile is update
          profileUpdateNotificaiton({
            fName: updatedAdmin.fName,
            email: updatedAdmin.email,
          });
          return res.json({
            status: "success",
            message: "Your profile has been updated successfully",
            user: updatedAdmin,
          });
        }
      }
    }
    res.json({
      status: "error",
      message: "Invalid request, your profile did not get updated",
    });
  } catch (error) {
    next(error);
  }
});

//Update password by the logined admin
router.patch(
  "/update-password",
  adminAuth,
  updatePasswordValidation,
  async (req, res, next) => {
    try {
      const { currentPassword, email, password } = req.body;

      const user = await getAdmin({ email });
      if (user?._id) {
        const isMatched = verifyPassword(currentPassword, user.password);
        if (isMatched) {
          const hashPassword = encryptPassword(password);

          const updatedUser = await updateAdmin(
            { _id: user._id },
            { password: hashPassword }
          );

          if (updatedUser?._id) {
            profileUpdateNotificaiton({
              fName: updatedUser.fName,
              email: updatedUser.email,
            });
            return res.json({
              status: "success",
              message: "Your Password has been updated successfully!",
            });
          }
        }
      }
      res.json({
        status: "error",
        message: "ERROR! unable to update the password, please try again later",
      });
    } catch (error) {
      error.status = 500;
      next(error);
    }
  }
);

// email verification router
router.post(
  "/email-verification",
  emailVerificationValidation,
  async (req, res) => {
    const filter = req.body;
    const update = { status: "active", emailValidationCode: "" };
    const result = await updateAdmin(filter, update);

    if (result?._id) {
      res.json({
        status: "success",
        message: "Your email has been verified. You may login now",
      });

      // await updateAdmin(filter, { emailValidationCode: "" });
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
      if (user.status === "inactive") {
        return res.json({
          status: "error",
          message:
            "Your email haven't been activated yet. Please check your email and follow the instruction to activate your account",
        });
      }

      const isMatched = verifyPassword(password, user.password);

      //when undefined, api wont send the undefined value
      if (isMatched) {
        user.password = undefined;
        user.refreshJWT = undefined;
        const jwts = await createJWTs({ email: user.email });

        res.json({
          status: "success",
          message: "User Logged in successfully",
          user,
          ...jwts,
        });
        return;
      }
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

// Password Rest OTP
router.post("/otp-request", async (req, res, next) => {
  try {
    const { email } = req.body;

    if (email) {
      // check if the user exist in database
      const user = await getAdmin({ email });
      if (user?._id) {
        //create OTP and send to the email

        const obj = {
          token: createOtp(),
          associate: email,
          type: "updatePassword",
        };
        const result = await insertSession(obj);
        if (result?._id) {
          //Send the OTP to admin email
          otpNotificaiton({ token: result.token, email });
          return res.json({
            status: "success",
            message:
              "If your email exist in our system, we will email you an OTP. Please check your email for further instruction",
          });
        }
      }
    }

    res.json({
      status: "error",
      message: "Invalid request of reset password",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

//reset password
router.patch("/password", async (req, res, next) => {
  try {
    const { otp, email, password } = req.body;

    // 1. get session info based on the otp, so that we get the user email
    const session = await deleteSession({ token: otp, associate: email });

    if (session?._id) {
      // 2. based on the email, update the password in the database after encrypting
      const update = {
        password: encryptPassword(password),
      };

      const updatedUser = await updateAdmin({ email }, update);

      if (updatedUser?._id) {
        // send the email notification{
        profileUpdateNotificaiton({
          fName: updatedUser.fName,
          email: updatedUser.email,
        });
        return res.json({
          status: "success",
          message: "Your password has been updated",
        });
      }
    }
    res.json({
      status: "error",
      message: "Invalid Request, unable to update the password",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

// this will return new access JWT
router.get("/accessjwt", async (req, res, next) => {
  try {
    const refreshJWT = req.headers.authorization;
    const decoded = verifyRefreshjwt(refreshJWT);

    console.log(decoded);
    if (decoded?.email) {
      const user = await getAdmin({ email: decoded.email, refreshJWT });
      console.log(user);
      if (user?._id) {
        // create new access token and return it
        const accessJWT = await signAccessJwt({ email: decoded.email });
        res.json({
          status: "success",
          accessJWT,
        });
      }
    }
    res.status(401).json({
      status: "error",
      message: "Log out user",
    });
    // check refJWT valid and exist in DB
    // create new accessJWT and return it
  } catch (error) {
    console.log(error);
    next(error);
  }
});
export default router;
