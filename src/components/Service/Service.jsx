import React, { useContext, useState } from "react";
import "./style.scss";

import ServiceSection from "./serviceCategory/ServiceSection";
import { Col, Row } from "react-bootstrap";
import { serviceArr } from "./serviceCategory/serviceArr";


const Service = () => {

  









  return (
    <div className="service">
      <div className="d-flex justify-content-center">
        <h1 className="text-center">Choose beteeen different types of <br/>Web Applications.</h1>
      </div>
      <div className=" service-content">
        <Row xs={1} md={2} className="g-4  mt-6 ">
          {
            serviceArr.map((item) => {
              return (
                <Col key={item.key}>
                  <ServiceSection content={item} />
                </Col>
              );
            })
          
         
          }
        </Row>
      </div>
    </div>
  );
};

export default Service;
