import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Navigation } from "swiper/modules";
import fetchData from "../../../Utils/fetchData";
import { Box, Typography } from "@mui/material";
import SliderCard from "./SliderCard";

export default function DiscountProducts() {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetchData("product?sort=quantity&limit=7");
      setProducts(response.data);
    })();
  }, []);
  if (!products?.length) return null; 

  const items = products?.map((item) => (
    <SwiperSlide key={item._id}>
      <SliderCard product={item} />
    </SwiperSlide>
  ));

  return (
    <Box
      sx={{
        width: { xs: "95%", md: "90%", lg: "85%" },
        height: "auto",
        margin: "48px auto",
        padding: { xs: "20px 10px", md: "24px 2%" },
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #ff6b6b, #ffa726, #66bb6a)",
        },
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 3, md: 4 },
          padding: { xs: "0 10px", md: "0 20px" },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "700",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            mb: 1,
          }}
        >
          Hot Deals
        </Typography>
        <Typography 
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.9rem", md: "1rem" },
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Don't miss out on these limited quantity offers
        </Typography>
      </Box>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 28,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="disc-products"
        style={{
          padding: "10px 0 50px 0",
        }}
      >
        {items}

        {/* Custom Navigation Arrows */}
        <Box
          className="swiper-button-next"
          sx={{
            "&::after": {
              fontSize: "20px",
              fontWeight: "bold",
              color: "#667eea",
            },
          }}
        />
        <Box
          className="swiper-button-prev"
          sx={{
            "&::after": {
              fontSize: "20px",
              fontWeight: "bold",
              color: "#667eea",
            },
          }}
        />
      </Swiper>
    </Box>
  );
}
