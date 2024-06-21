import React, { useState, useEffect } from "react";
import "../../styles/practice/Sliders.css";
import Data from "../../constant/practice/Data";

const Slider = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextImg();
    }, 2000);

    return () => clearTimeout(timer);
  }, [activeImgIndex]);

  const handleNextImg = () => {
    setActiveImgIndex((activeImgIndex + 1) % Data.length);
  };

  const handlePreviousImg = () => {
    setActiveImgIndex(!activeImgIndex ? Data.length - 1 : activeImgIndex - 1);
  };

  return (
    <>
      <div className="center">
        <button onClick={handlePreviousImg}>Previous</button>
        {Data.map((url, index) => {
          return (
            <img
              src={url}
              key={url}
              alt="carousel images"
              className={activeImgIndex === index ? "show" : "hidden"}
            />
          );
        })}
        <button onClick={handleNextImg}>Next</button>
      </div>
    </>
  );
};

export default Slider;
