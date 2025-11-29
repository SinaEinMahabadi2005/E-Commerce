import express from "express";
import isAdmin from "../MiddleWares/isAdmin.js";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../Controllers/category.controller.js";

const router = express.Router();

router.route("/").post(isAdmin, create).get(getAll);
router.route("/:id").get(getOne).patch(isAdmin, update).delete(isAdmin, remove)

export default router;
