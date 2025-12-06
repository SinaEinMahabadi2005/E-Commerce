import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ id, title, image }) {
    const navigate=useNavigate()
  return (
    <Box
    onClick={()=>navigate(`/products/${id}/${title.replaceAll(' ','-')}`)}
      sx={{
        width: "100%",
        height: "320px",
        position: "relative",
        borderRadius: "32px",
        cursor : 'pointer' ,
        overflow : 'hidden' ,
        "& img": {
          width: "100%",
          height: "100%",
          transition: "all .5s",
        //   objectFit : 'cover',
        },
        "&:hover img": {
          filter: "brightness(80%)",
        },
        "& h2": {
          position: "absolute",
          top: "90%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "32px",
          fontWeight: "bold",
          opacity : '0',
          visibility: "hidden",
          transition : 'all .1s',
          color : 'white'
        },
        "&:hover h2": {
         opacity : 1,
          top: "50%",
          visibility: "visible",
        },
      }}
    >
        <img src={import.meta.env.VITE_FILE_URL+image} alt={title} />
        <h2>{title}</h2>
    </Box>
  );
}
