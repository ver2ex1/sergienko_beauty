import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useWindowSize from "hooks/useWindowSize";

const Carousel = ({ data }) => {
  const { width } = useWindowSize();
  let settings = {
    dots: width > 768 ? true : false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nextArrow: <ArrowForwardIosIcon sx={{ fill: "rgb(89, 82, 68)" }} />,
    prevArrow: <ArrowBackIosIcon sx={{ fill: "rgb(89, 82, 68)" }} />,
  };
  return (
    <Slider {...settings}>
      {data.map((item) => {
        return <img src={item.image} alt="Portfolio" key={item._id} />;
      })}
    </Slider>
  );
};

export default Carousel;
