import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useWindowSize from "hooks/useWindowSize";
import { Box, Typography } from "@mui/material";

import getStyles from "./styles";

const CardCarousel = ({ data }) => {
  const { width } = useWindowSize();
  let settings = {
    dots: width > 768 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nextArrow: <ArrowForwardIosIcon sx={{ fill: "rgb(89, 82, 68)" }} />,
    prevArrow: <ArrowBackIosIcon sx={{ fill: "rgb(89, 82, 68)" }} />,
  };
  const classes = getStyles();
  return (
    <Slider {...settings}>
      {data.map((item) => (
        <Box sx={classes.card} key={item._id}>
          <img src={item.image} alt="Portfolio" />
          <Typography variant="h6">{item.description}</Typography>
        </Box>
      ))}
    </Slider>
  );
};

export default CardCarousel;
