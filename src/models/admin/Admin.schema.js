import mongoose, { mongo } from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
      default: false,
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
      type: date,
      default: null,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, "Email must be less than 50 character"],
      index: 1,
      unique: true,
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
