import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import "./PromoCarousel.css";

const PromoCarousel = () => {

  const options = {
    autoPlay: true,
    dynamicHeight: false,
    emulateTouch: true,
    infiniteLoop: true,
    interval: 10000,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false
  }

  const image1Jpg = require(`img/1.jpg`);
  const image2Jpg = require(`img/2.jpg`);
  const image3Jpg = require(`img/3.jpg`);
  const image4Jpg = require(`img/4.jpg`);


  return (
    <Carousel className="PromoCarousel" {...options}>
      <picture id="slide-1" className="slide">
        <source srcSet={image1Jpg}/>
        <img
          src={image1Jpg}
          alt="Промо-акция"
          loading="lazy"
          className="slide"
        />
      </picture>
      <picture id="slide-2" className="slide">
        <source srcSet={image2Jpg}/>
        <img
          src={image2Jpg}
          alt="Промо-акция"
          loading="lazy"
          className="slide"
        />
      </picture>
      <picture id="slide-3" className="slide">
        <source srcSet={image3Jpg}/>
        <img
          src={image3Jpg}
          alt="Промо-акция"
          loading="lazy"
          className="slide"
        />
      </picture>
      <picture id="slide-4" className="slide">
        <source srcSet={image4Jpg}/>
        <img
          src={image4Jpg}
          alt="Промо-акция"
          loading="lazy"
          className="slide"
        />
      </picture>
    </Carousel>
  );
};

export default PromoCarousel;