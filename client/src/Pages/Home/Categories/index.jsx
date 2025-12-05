import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import { Box, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const [categories, setCategories] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetchData("category");
      setCategories(response.data);
    })();
  }, []);
  const items=categories?.map((category)=>(
    <CategoryCard key={category._id} id={category._id} title={category.title} image={category.image[0]}/>
  ))
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        sx={{
          margin: "48px auto",
          fontWeight :'bold'
        }}
      >
        Category
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          },
          gap: "16px",
          width: { xs: "95%", md: "90%", lg: "85%" },
          height: "auto",
          margin: "48px auto",
        }}
      >
        {items}
      </Box>
    </Box>
  );
}
