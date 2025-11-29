import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import path from "path";
import HandleError from "./utils/handleError.js";
import catchError from "./Utils/catchError.js";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
import productRouter from "./routes/product.route.js"
import categoryRouter from "./routes/category.route.js"
import sliderRouter from "./routes/slider.route.js"
import searchRouter from "./routes/search.route.js"
import uploadRouter from "./routes/upload.route.js"

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("Public"));

// Routes
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/product", productRouter)
app.use("/api/category", categoryRouter)
app.use("/api/slider", sliderRouter)
app.use("/api/search", searchRouter)
app.use("/api/upload", uploadRouter)

// Error Handling
app.use("*", (req, res, next) => {
  return next(new HandleError("Route not found", 404));
});

app.use(catchError);


export default app;
