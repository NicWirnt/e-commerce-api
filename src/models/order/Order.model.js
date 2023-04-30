import OrderSchema from "./Order.schema.js";

export const insertOrder = (obj) => {
  return OrderSchema(obj).save();
};

export const getOrderById = (_id) => {
  return OrderSchema.findById(_id);
};

export const getOrderByFilter = (filter) => {
  return OrderSchema.findOne(filter);
};
