import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import Udemy from "../../images/CarouselImages/udemy.svg";

export const LogoCarousel = () => {
  const myArrow = ({ type, onClick, isEdge }) => {
    // type === consts.PREV;
    // console.log(consts);
    const pointer = type === consts.PREV ? "👈" : "👉";
    return (
      <button className="carousel-button" onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };
  return (
    <div className="logo-carousel">
      <Carousel
        renderArrow={myArrow}
        pagination={false}
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 2, itemsToScroll: 2 },
          { width: 850, itemsToShow: 4 },
          { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
          { width: 1450, itemsToShow: 5 },
          { width: 1750, itemsToShow: 6 },
        ]}
      >
        <div value="udemy">
          <img src={Udemy} alt="Udemy" className={"tabIcon pr-2"} />
        </div>
        <div value="udemy">
          <img src={Udemy} alt="Udemy" className={"tabIcon pr-2"} />
        </div>
        <div value="udemy">
          <img src={Udemy} alt="Udemy" className={"tabIcon pr-2"} />
        </div>
        <div value="udemy">
          <img src={Udemy} alt="Udemy" className={"tabIcon pr-2"} />
        </div>
        <div value="udemy">
          <img src={Udemy} alt="Udemy" className={"tabIcon pr-2"} />
        </div>
        <div value="udemy">
          <img src={Udemy} alt="Udemy" className={"tabIcon pr-2"} />
        </div>
        <div value="udemy">
          <img src={Udemy} alt="Udemy" className={"tabIcon pr-2"} />
        </div>
        <div value="udemy">
          <img src={Udemy} alt="Udemy" className={"tabIcon pr-2"} />
        </div>
        <div value="udemy">
          <img src={Udemy} alt="Udemy" className={"tabIcon pr-2"} />
        </div>
        <div value="udemy">
          <img src={Udemy} alt="Udemy" className={"tabIcon pr-2"} />
        </div>
      </Carousel>
    </div>
  );
};
