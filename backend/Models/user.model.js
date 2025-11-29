import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: [true, "username is already exist"],
    },
    email: {
      type: String,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "email is not valid"],
      unique: [true, "email is already exist"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: 4,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    favoriteProductIds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
