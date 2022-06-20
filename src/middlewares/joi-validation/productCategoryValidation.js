import Joi from "joi";
import { SHORTSTR, validator } from "./constantValidation.js";

export const newCategoryValidation = (req, res, next) => {
  try {
    const schema = Joi.object({
      _id: SHORTSTR.allow(""),
      status: SHORTSTR.required(),
      parentCatId: SHORTSTR.allow(""),
      catName: SHORTSTR.required(),
    });

    validator(schema, req, res, next);
  } catch (error) {
    next(error);
  }
};
