import express from "express";
import isAdmin from "../MiddleWares/isAdmin.js";
import isLogin from "../Middlewares/isLogin.js";
import {
  getAllUser,
  getUser,
  removeUser,
  updateUser,
} from "../Controllers/user.controller.js";

const router = express.Router();

router.route("/").get(isAdmin, getAllUser);
router
  .route("/:id")
  .get(isLogin, getUser)
  .patch(isLogin, updateUser)
  .delete(isLogin, removeUser);

export default router;
