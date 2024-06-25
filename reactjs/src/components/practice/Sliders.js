import React, { useState, useEffect } from "react";
import "../../styles/practice/Sliders.css";
import Data from "../../constant/practice/Data";

const items = [
  {
    image:
      "https://intellsys-optimizer.b-cdn.net/interviews/b1435960-88bd-4325-8051-6abef2b79c39/578e72e8-614f-4fc5-a355-d3d872778f16/1.png",
    text: "I am Card 1",
  },
  {
    image:
      "https://intellsys-optimizer.b-cdn.net/interviews/b1435960-88bd-4325-8051-6abef2b79c39/578e72e8-614f-4fc5-a355-d3d872778f16/2.png",
    text: "I am Card 2",
  },
  {
    image:
      "https://intellsys-optimizer.b-cdn.net/interviews/b1435960-88bd-4325-8051-6abef2b79c39/578e72e8-614f-4fc5-a355-d3d872778f16/3.png",
    text: "I am Card 3",
  },
  {
    image:
      "https://intellsys-optimizer.b-cdn.net/interviews/b1435960-88bd-4325-8051-6abef2b79c39/578e72e8-614f-4fc5-a355-d3d872778f16/4.png",
    text: "I am Card 4",
  },
];

const Slider = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextImg();
    }, 2000);

    return () => clearTimeout(timer);
  }, [activeImgIndex]);

  const handleNextImg = () => {
    setActiveImgIndex((activeImgIndex + 1) % items.length);
  };

  const handlePreviousImg = () => {
    setActiveImgIndex(!activeImgIndex ? items.length - 1 : activeImgIndex - 1);
  };

  return (
    <>
      <div className="center">
        <div>
          {items.map((url, index) => {
            return (
              <>
                <div className="carousel">
                  <img
                    src={url?.image}
                    key={url?.image}
                    alt="carousel images"
                    className={activeImgIndex === index ? "show" : "hidden"}
                  />
                  <div
                    className={
                      activeImgIndex === index ? "text show" : " text hidden"
                    }
                  >
                    {url?.text}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <button onClick={handlePreviousImg}>Previous</button>
          {items.map((url, i) => {
            return (
              <span className={activeImgIndex === i ? "dot filledDot" : "dot"}>
                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <circle r="8" cx="15" cy="15" fill="white" />
                </svg>
              </span>
            );
          })}
          <button onClick={handleNextImg}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Slider;
