import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "",
    },
    buyer: {
      type: mongoose.schema.Types.ObjectId,
    },
    orderTotal: {
      type: Number,
      required: true,
      default: 0,
    },
    paymentStatus: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
