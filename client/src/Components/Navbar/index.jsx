import { Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const cartLength = useSelector((state) => state.cart.items).length;
  const dispath=useDispatch()
  return
   <Stack flexDirection={"row"} component={'nav'} justifyContent={'space-between'} px={'32px'}>

   </Stack>;
}
