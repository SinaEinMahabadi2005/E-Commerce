import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    description: {
      trim: true,
      type: String,
    },
    images: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    quantity: {
      type: Number,
      required: [true, "quantity is required"],
      min: 0,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
