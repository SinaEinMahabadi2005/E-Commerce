import express from "express";
import isAdmin from "../MiddleWares/isAdmin.js";
import isLogin from "../Middlewares/isLogin.js";
import {
  create,
  favoriteProduct,
  get,
  getAll,
  remove,
  update,
} from "../Controllers/product.controller.js";

const router = express.Router();

router.route("/").get(getAll).post(isAdmin, create);
router.route("/:id").get(get).patch(isAdmin, update).delete(isAdmin, remove);
router.route("/favorite/:id").post(isLogin, favoriteProduct)

export default router;
