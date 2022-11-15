import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselSlide = (props) => {
  const item = props.carouselData;
  console.log(item);
  return (
    <>
      <Carousel.Item interval={item.interval}>
        <img
          className="d-block w-100"
          style={{ width: "800px", height: "400px" }}
          src={item.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  );
};

export default CarouselSlide;
