import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
    },
    productName: {
      type: String,
      maxlength: 150,
    },

    reviewedBy: {
      type: String,
      required: true,
    },
    reviewedBy_id: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      default: "",
    },
    rating: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ratings", ratingSchema);
