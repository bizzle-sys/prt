import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
  const [activeIndex, setactiveIndex] = useState(0);
  const items = [
    {
      title: "item1",
      description: "item1",
      icon: require("../../assets/runwayscshot.png"),
    },
    {
      title: "item2",

      description: "item2",
      icon: require("../../assets/runwayscshot.png"),
    },
    {
      title: "item3",

      description: "item3",
      icon: require("../../assets/runwayscshot.png"),
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setactiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate:(-${activeIndex * 100}%)` }}>
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="button-arrow">
          arrow_left
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className={`${
                  index === activeIndex
                    ? "indicator-symbol-active"
                    : "indicator-symbol"
                }`}>
                ...
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="button-arrow">
          arrow_right
        </button>
      </div>
    </div>
  );
};
