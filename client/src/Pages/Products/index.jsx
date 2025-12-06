import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import fetchData from "../../Utils/fetchData";
import ProductCard from "./ProductCard";
const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 200,
    label: "$200",
  },
  {
    value: 400,
    label: "$400",
  },
  {
    value: 600,
    label: "$600",
  },
  {
    value: 800,
    label: "$800",
  },
  {
    value: 1000,
    label: "$1000",
  },
];
function pricetext(value) {
  return `$${value}`;
}
export default function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState();
  const [sort, setSort] = useState("-createdAt");
  const [minMax, setMinMax] = useState([0, 1000]);
  const handlePriceChange = (event, newValue) => {
    setMinMax(newValue);
  };
  useEffect(() => {
    (async () => {
      const response = await fetchData(
        `product?${
          categoryId == "all" ? "" : `filters[categoryId][$eq]=${categoryId}&`
        }filters[price][$lte]=${minMax[1]}&filters[price][$gte]=${minMax[0]}&sort=${sort}&populate=categoryId`
      );
      setProducts(response.data);
    })();
  }, [sort, categoryId, minMax]);
  const items = products?.map((product) => (
    <ProductCard key={product._id} product={product} />
  ));
  return (
    <Stack
      flexDirection={"row"}
      my={"48px"}
      flexWrap={"wrap"}
      px={"4%"}
      justifyContent={"space-between"}
    >
      <Box sx={{ minWidth: 300 }}>
        <FormControl fullWidth>
          <InputLabel id="sortId">Sort</InputLabel>
          <Select
            labelId="sortId"
            id="sort"
            value={sort}
            label="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <MenuItem value={"title"}>A-Z</MenuItem>
            <MenuItem value={"-title"}>Z-A</MenuItem>
            <MenuItem value={"price"}>Lowest Price</MenuItem>
            <MenuItem value={"-price"}>Highest Price</MenuItem>
            <MenuItem value={"-createdAt"}>Nesest Product</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Price Range"}
          value={minMax}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          getAriaValueText={pricetext}
          min={0}
          max={1000}
          step={20}
          marks={marks}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          },
          gap: "24px",
          width: "100%",
          p: "32px",
        }}
      >
        {items}
      </Box>
    </Stack>
  );
}
