import jwt from "jsonwebtoken";
import catchAsync from "../Utils/catchAsync.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import Product from "../Models/product.model.js";
import User from "../Models/user.model.js";

export const getAll = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Product, req?.query)
    .filters()
    .sort()
    .paginate()
    .limitFields()
    .populate();

  const products = await features.model;
  return res.status(200).json({
    success: true,
    data: products,
  });
});

export const get = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  let isFavorite = false;

  if (req?.headers?.authorization) {
    const { id: userId } = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET
    );

    const user = await User.findById(userId);

    if (user.favoriteProductIds.includes(id)) {
      isFavorite = true;
    }
  }
  const product = await Product.findById(id);

  return res.status(200).json({
    success: true,
    data: product,
    isFavorite,
  });
});

export const create = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);
  return res.status(200).json({
    message: "product created successfully",
    success: true,
    data: product,
  });
});

export const update = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({
    message: "product update successfully",
    success: true,
    data: product,
  });
});

export const remove = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  return res.status(200).json({
    success: true,
    message: "product removed successfully",
  });
});

export const favoriteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );
  const { isFavorite = false } = req.body;
  let newFav;
  if (isFavorite) {
    await User.findByIdAndUpdate(userId, { $pull: { favoriteProductIds: id } });
    newFav = false;
  } else {
    await User.findByIdAndUpdate(userId, { $push: { favoriteProductIds: id } });
    newFav = true;
  }
  return res.status(200).json({
    isFavorite: newFav,
    message: newFav
      ? "add product to favorite list"
      : "remove product from favorite list",
  });
});
