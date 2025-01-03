import { PropsWithChildren } from "react";

import Slider from "react-slick";

function ReviewCardWrapper(props: PropsWithChildren) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 669,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1249,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <Slider className="review-card" {...settings}>
      {props.children}
    </Slider>
  );
}
export default ReviewCardWrapper;
