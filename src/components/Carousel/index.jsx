import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
  let settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data.map((item) => {
        console.log(item);
        return <img src={item.image} alt="Portfolio" key={item._id} />;
      })}
    </Slider>
  );
};

export default Carousel;
