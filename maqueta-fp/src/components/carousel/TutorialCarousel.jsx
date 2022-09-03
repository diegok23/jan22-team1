import React, { useState } from "react";
import "./TutorialCarousel.css";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

import Page1 from "./Tutorial-Carousel-IMG/Tutorial page 1.png";
import Page2 from "./Tutorial-Carousel-IMG/Tutorial page 2.png";
import Page3 from "./Tutorial-Carousel-IMG/Tutorial page 3.png";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  const images = [
    { title: "", subtitle: "", img: Page1 },
    {
      title: "",
      subtitle: "",
      img: Page2,
    },
    {
      title: "",
      subtitle: "",
      img: Page3,
    },
  ];

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url('${images[currImg].img}')` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIos style={{ fontSize: 30 }} />
        </div>
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIos style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
