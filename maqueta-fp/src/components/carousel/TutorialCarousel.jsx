import React, { useState } from "react";
import "./TutorialCarousel.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import Page1 from "./Tutorial-Carousel-IMG/Tutorial page 1.png";
import Page2 from "./Tutorial-Carousel-IMG/Tutorial page 2.png";
import Page3 from "./Tutorial-Carousel-IMG/Tutorial page 3.png";

const images = [
  { title: "San Diego", subtitle: "This is San Diego", img: Page1 },
  {
    title: "Salvador, Brazil",
    subtitle: "The Best City in the World",
    img: Page2,
  },
  {
    title: "UBC (Vancouver)",
    subtitle: "The University of British Columbia",
    img: Page3,
  },
];

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
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
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;

//-----------------------------------------------------------//
