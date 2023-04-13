import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
export const CarouselTry = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <h1>item 1</h1>
      </Carousel.Item>
      <Carousel.Item>
        <h1>item 2</h1>
      </Carousel.Item>
      <Carousel.Item>
        <h1>item 3</h1>
      </Carousel.Item>
    </Carousel>
  );
};
