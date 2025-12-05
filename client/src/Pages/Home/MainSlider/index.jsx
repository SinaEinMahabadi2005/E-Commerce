import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import MSLoading from "./MSLoading";


export default function MainSlider() {
  const [sliders, setSliders] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetchData("slider");
      setSliders(response.data);
    })();
  }, []);

  const items = sliders?.map((slider) => (
    <SwiperSlide key={slider._id}>
      <img
        src={import.meta.env.VITE_FILE_URL + slider.image}
        alt={slider.title}
      />
      <p>{slider.title}</p>
    </SwiperSlide>
  ));
  if(!sliders) return <MSLoading/>
  return (
    <Box
      sx={{
        height: "70vh",
        width: "90%",
        margin: "48px auto",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 0 5px 2px rgba(0,0,0,0.2)",
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mainSlider"
      >
        {items}
      </Swiper>
    </Box>
  );
}
