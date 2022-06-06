import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    fName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [20, "First name must be less than 20 character"],
    },
    lName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [20, "Last name must be less than 20 character"],
    },

    dob: {
      type: Date,
      default: null,
    },
    email: {
      unique: true,
      index: 1,
      type: String,
      required: true,
      trim: true,
      maxlength: [50, "Email must be less than 50 character"],
    },
    emailValidationCode: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: [15, "phone must be less than 15 characters"],
      minlength: [10, "phone number must be at least 10 characters"],
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: "N/A",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", AdminSchema);
