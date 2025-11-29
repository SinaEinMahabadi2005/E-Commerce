import catchAsync from "../Utils/catchAsync.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import Category from "../Models/category.model.js";

export const create = catchAsync(async (req, res, next) => {
  const category = await Category.create(req.body);
  return res.status(201).json({
    success: true,
    data: category,
    message: "category created successfully",
  });
});

export const getAll = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Category, req?.query)
    .filters()
    .sort()
    .limitFields()
    .paginate()
    .populate();
  const category = await features.model;
  return res.status(200).json({
    success: true,
    data: category,
  });
});

export const getOne = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  return res.status(200).json({
    success: true,
    data: category,
  });
});

export const update = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const newCategory = await Category.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({
    success: true,
    data: newCategory,
    message: "category updated successfully",
  });
});

export const remove = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await Category.findByIdAndDelete(id);
  return res.status(200).json({
    success: true,
    message: "category removed successfully",
  });
});
