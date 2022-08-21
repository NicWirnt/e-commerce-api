import Joi from "joi";
import {
  DATE,
  LONGSTR,
  PRICE,
  QTY,
  SHORTSTR,
  validator,
} from "./constantValidation.js";

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

export const newProductValidation = (req, res, next) => {
  try {
    req.body.salesStartDate =
      req.body.salesStartDate === "null" ? null : req.body.salesStartDate;
    req.body.salesEndDate =
      req.body.salesEndDate === "null" ? null : req.body.salesEndDate;

    const schema = Joi.object({
      _id: SHORTSTR.allow(""),
      status: SHORTSTR.required(),
      name: SHORTSTR.required(),
      sku: SHORTSTR.required(),
      description: LONGSTR.required(),
      qty: QTY.required(),
      price: PRICE.required(),
      salesPrice: PRICE,
      salesStartDate: DATE.allow(null),
      salesEndDate: DATE.allow(null),
      catId: SHORTSTR.required(),
      images: LONGSTR,
    });

    validator(schema, req, res, next);
  } catch (error) {
    next(error);
  }
};

export const updateProductValidation = (req, res, next) => {
  try {
    req.body.salesStartDate =
      req.body.salesStartDate === "null" ? null : req.body.salesStartDate;
    req.body.salesEndDate =
      req.body.salesEndDate === "null" ? null : req.body.salesEndDate;

    const schema = Joi.object({
      _id: SHORTSTR.required(),
      status: SHORTSTR.required(),
      name: SHORTSTR.required(),
      description: LONGSTR.required(),
      qty: QTY.required(),
      price: PRICE.required(),
      salesPrice: PRICE,
      salesStartDate: DATE.allow(null),
      salesEndDate: DATE.allow(null),
      catId: SHORTSTR.required(),
      thumbnail: SHORTSTR,
      images: LONGSTR.allow(null, ""),
      imgToDelete: LONGSTR.allow(null, ""),
    });

    validator(schema, req, res, next);
  } catch (error) {
    next(error);
  }
};
