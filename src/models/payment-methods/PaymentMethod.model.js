import PaymentMethodSchema from "./PaymentMethod.schema.js";

export const insertPaymentMethod = (obj) => {
  return PaymentMethodSchema(obj).save();
};

export const getAllPaymentMethods = () => {
  return PaymentMethodSchema.find();
};

export const getPaymentMethods = (filter) => {
  return PaymentMethodSchema.findById(filter);
};

export const deletePaymentMethodById = (_id) => {
  return PaymentMethodSchema.findByIdAndDelete(_id);
};

export const updatePaymentMethodById = (_id, updateObj) => {
  return PaymentMethodSchema.findByIdAndUpdate(_id, updateObj);
};
