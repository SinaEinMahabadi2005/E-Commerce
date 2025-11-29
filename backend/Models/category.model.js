import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  image: {
    type: [String],
    default: [],
    required: [true, "image is required"],
  },
});
const Category = mongoose.model("Category", categorySchema);

export default Category;
