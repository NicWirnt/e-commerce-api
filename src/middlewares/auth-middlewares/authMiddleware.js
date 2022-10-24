import { verifyAccessJwt } from "../../helpers/jwtHelper.js";
import { getAdmin } from "../../models/admin/Admin.model.js";
import { getSession } from "../../session/SessionModel.js";

export const adminAuth = async (req, res, next) => {
  try {
    //get the accessJWT from header
    const { authorization } = req.headers;
    if (req.headers) {
      //check if it is valid and not expired
      const decoded = verifyAccessJwt(authorization);
      console.log(decoded);
      if (decoded === "jwt expired") {
        return res.status(403).json({
          status: "error",
          message: "JWT expired!!",
        });
      }
      if (decoded?.email) {
        // check if exist in database
        const existInDb = await getSession({
          type: "jwt",
          token: authorization,
        });
        if (existInDb?._id) {
          //get the user info and attache in our req body
          const admin = await getAdmin({ email: decoded.email });
          if (admin?._id) {
            req.adminInfo = admin;
            return next();
          }
        }
      }
    }

    res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  } catch (error) {
    next(error);
  }
};
