import React from "react";

import img1 from "../images/power.png";

import { Link } from "react-router-dom";
import animationService from "../Animation/developer-animation.gif";
import "./style.scss";
import homeserv from "../images/dev.jpg";
import Carousel from "react-bootstrap/Carousel";

import { CarouselData } from "./CarouselData";
import CarouselSlide from "./CarouselSlide";

const Home = () => {
  const sectionStyle = {
    width: "100%",
    height: "793px",
  };

  return (
    <div className="mainpage">

      <div className=" mainpage__bg__wrapper">
        <img
          src={homeserv}
          className="img-fluid "
          alt="service"
          style={sectionStyle}
        ></img>
      </div>

      <div className="mainpage__title-content">
        <h1>
          Welcome to <br />
          One platform service
        </h1>
        <div className="mainpage__service-btn  ">
          <Link to="service">CHOOSE SERVICE</Link>
        </div>
      </div>

      <div className="container mt-10  about-section">
        <div className="main-animation  align-self-center">
          <img
            src={animationService}
            alt="loading..."
            style={{ width: "512px", height: "512px" }}
          />
        </div>
        <div className=" align-self-center mt-5  about-section_intrPage">
          <h1 className="text-center font-sans text-2xl font-bold mb-8">
            Who we are?
          </h1>
          <p className="px-4 pb-5">
            We are Web app development team, we empowers our customer with
            latest web-based technology to perform and manage your business like
            a pro and act similarly to a mobile app.
            <br /> <br />
            We Build more than a website, We build Web Applications Basically,
            web apps are entirely multi-platform. They provide users with an
            entertaining exchange no matter the operating system, whether that
            be <br />
            Android, iOS, PC, etc. as long as users maintain an internet
            connection.
          </p>
    
           <div className="border-2 rounded bg-dark p-3 text-light d-flex justify-content-center  Lmore-btn">
              <Link to="about"> Learn more</Link>
          </div>
         
        </div>
      </div>

      <div className=" carousel-conatiner">
        <Carousel>
          <Carousel.Item interval={1000} className="slide ">
            <img
              className="d-block w-100 "
              style={{ width: "800px", height: "400px" }}
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              style={{ width: "800px", height: "400px" }}
              src={img1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ width: "800px", height: "400px" }}
              src={img1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
