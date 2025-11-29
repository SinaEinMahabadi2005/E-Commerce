import express from "express";
import upload from "../utils/UploadFile.js";
import { deleteFile, uploadCn } from "../controllers/upload.controller.js";
import isAdmin from "../MiddleWares/isAdmin.js"

const router = express.Router();

router
  .route("/")
  .post(isAdmin, upload.single("file"), uploadCn)
  .delete(isAdmin, deleteFile);

export default router;
