import React, { Fragment } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import './CarouselPrints.scss'

const CarouselPrints = (props) => {

  const carouselImg = props.images
  
  return (
    <Fragment>
      <Carousel className="carousel" slidesToShow={1}>
        {
        carouselImg.map(imgSrc => {
          return <img className="carousel__img" src={imgSrc} alt="3d print" />
        })
        }
      </Carousel>
    </Fragment>
  );
};

export default CarouselPrints;
