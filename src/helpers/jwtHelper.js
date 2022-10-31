import jwt from "jsonwebtoken";
import { updateAdmin } from "../models/admin/Admin.model.js";
import { deleteSession, insertSession } from "../session/SessionModel.js";

//payload must be an object
export const signAccessJwt = async (payload) => {
  const accessJWT = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "15m",
  });

  const obj = {
    token: accessJWT,
    type: "jwt",
  };
  await insertSession(obj);
  return accessJWT;
};

export const signRefreshJwt = async (payload) => {
  const refreshJWT = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "30d",
  });

  await updateAdmin({ email: payload.email }, { refreshJWT });
  return refreshJWT;
};

export const createJWTs = async (payload) => {
  const accessJWT = await signAccessJwt(payload);
  const refreshJWT = await signRefreshJwt(payload);

  return {
    accessJWT,
    refreshJWT,
  };
};

export const verifyAccessJwt = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  } catch (error) {
    if (error.message === "jwt expired") {
      deleteSession({ type: "jwt", token });
    }

    return error.message;
  }
};

export const verifyRefreshjwt = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};
