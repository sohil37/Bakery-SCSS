import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

import Slider, { Settings } from "react-slick";

function Carousel(props: { items: JSX.Element[]; itemsToShow: 2 | 3 }) {
  var settings: Settings = {
    dots: true,
    speed: 500,
    infinite: false,
    arrows: false,
    slidesToShow: props.itemsToShow,
    slidesToScroll: props.itemsToShow,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: props.itemsToShow === 3 ? 2 : 1,
          slidesToScroll: props.itemsToShow === 3 ? 2 : 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {props.items && (
        <div className="root">
          <Slider {...settings}>{...props.items}</Slider>
        </div>
      )}
    </>
  );
}

export default Carousel;
