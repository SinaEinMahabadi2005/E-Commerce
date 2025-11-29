import HandleError from "../Utils/handleError.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";
import User from "../Models/user.model.js";
import jwt from "jsonwebtoken";

export const getAllUser = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(User, req.query)
    .filters()
    .sort()
    .limitFields()
    .paginate()
    .populate();

  const users = await features.model;
  const count = await User.countDocuments(req?.query?.filters);

  return res.status(200).json({
    success: true,
    data: users,
    count,
  });
});

export const getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { id: userId, role } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );

  if (role !== "admin" && id !== userId) {
    return next(new HandleError("you don't have a permission", 401));
  }
  const user = await User.findById(id);

  return res.status(200).json({
    success: true,
    data: user,
  });
});

export const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { id: userId, role } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );

  if (role !== "admin" && id !== userId) {
    return next(new HandleError("you don't have a permission", 401));
  }
  const { role: newRole = "", ...others } = req.body;
  const user = await User.findByIdAndUpdate(id, others, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    success: true,
    message: "User updated",
    data: user,
  });
});

export const removeUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { id: userId, role } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );

  if (role !== "admin" && id !== userId) {
    return next(new HandleError("you don't have a permission", 401));
  }
  await User.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "User removed",
  });
});
