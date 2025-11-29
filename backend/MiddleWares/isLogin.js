import HandleError from "../Utils/handleError.js";
import catchAsync from "../Utils/catchAsync.js";
import jwt from "jsonwebtoken";

const isLogin = catchAsync(async (req, res, next) => {
  try {
    const token = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET
    );
    return next();
  } catch (err) {
    return next(new HandleError("you don't have permission", 401));
  }
});

export default isLogin;
