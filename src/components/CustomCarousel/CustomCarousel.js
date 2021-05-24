import React from "react";
import udemy from "../../images/CarouselImages/udemy.svg";
import "./CustomCarousel.css";
import InfiniteCarousel from "react-leaf-carousel";
export const CustomCarousel = () => {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ]}
      slidesToShow={4}
      slidesToScroll={2}
      slidesSpacing={4}
      //   showSides={true}
      //   sidesOpacity={0.5}
      //   sideSize={0.1}
      //   scrollOnDevice={true}
    >
      <div>
        <img alt="" src={udemy} />
      </div>
      <div>
        <img alt="" src={udemy} />
      </div>
      <div>
        <img alt="" src={udemy} />
      </div>
      <div>
        <img alt="" src={udemy} />
      </div>
      <div>
        <img alt="" src={udemy} />
      </div>
      <div>
        <img alt="" src={udemy} />
      </div>
      <div>
        <img alt="" src={udemy} />
      </div>
      <div>
        <img alt="" src={udemy} />
      </div>
      <div>
        <img alt="" src={udemy} />
      </div>
      <div>
        <img alt="" src={udemy} />
      </div>
      <div>
        <img alt="" src={udemy} />
      </div>
    </InfiniteCarousel>
  );
};
