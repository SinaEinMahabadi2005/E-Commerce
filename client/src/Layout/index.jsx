import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Box component={"main"} minHeight={"70vh"}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
