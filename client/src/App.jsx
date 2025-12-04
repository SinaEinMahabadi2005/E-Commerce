import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { CssBaseline } from "@mui/material";
export default function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}
