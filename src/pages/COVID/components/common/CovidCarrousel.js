import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import Dashboard from "../../../../images/dashboard.png";

export const CovidCarrousel = () => {
  return (
    <InfiniteCarousel
      slidesToShow={1}
      slidesToScroll={1}
      slidesSpacing={24}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      arrows={true}
      // scrollOnDevice={true}
    >
      <div>
        <img alt="" src={Dashboard} />
      </div>
      <div>
        <img alt="" src={Dashboard} />
      </div>
      <div>
        <img alt="" src={Dashboard} />
      </div>
      <div>
        <img alt="" src={Dashboard} />
      </div>
    </InfiniteCarousel>
  );
};
