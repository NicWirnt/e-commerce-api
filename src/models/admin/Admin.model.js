import AdminSchema from "./Admin.schema.js";

export const insertAdmin = (obj) => {
  return AdminSchema(obj).save();
};

export const getAdminById = (_id) => {
  return AdminSchema.findById(_id);
};

// FILTER MUST BE AN OBJECT
export const getAdmin = (filter) => {
  return AdminSchema.findOne(filter);
};

// Filter must be an object
export const updateAdmin = (filter, obj) => {
  return AdminSchema.findOneAndUpdate(filter, obj, { new: true });
};
