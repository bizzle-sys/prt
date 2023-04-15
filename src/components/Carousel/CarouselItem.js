import React from "react";

export const CarouselItem = ({ item }) => {
  return (
    <div className="carouselItem">
      <div></div>
      <img src={item.icon} alt="" className="carouselImg" />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};
