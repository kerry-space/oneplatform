import React from 'react';
import ServiceCard from "../ServiceCard"
import { serviceContent } from '../serviceContent';
import {Col, Row} from "react-bootstrap";

const smallBuss = () => {
  return (
    <div>
      
      <Row xs={1} md={2} >
              {serviceContent.map((item) => {
                return (
                  <Col key={item.key}>
                    <ServiceCard content={item} />
                  </Col>
                );
              })}
            </Row>
    </div>
  );
}

export default smallBuss;
