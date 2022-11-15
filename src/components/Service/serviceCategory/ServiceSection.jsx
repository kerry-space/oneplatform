import { Img } from "@chakra-ui/react";
import React from "react";
import { Row, Col, Card } from "react-bootstrap/";



const Service = (props) => {
  const item = props.content;
  console.log(item)
  return (
    <div className="container flex flex-xl-column cardWrapper  mb-5 justify-content-center mt-5">
      <Card className="card" style={{width: "332px", height: "300px", margin: "0px", rowGap: "0px"}}>
        <Card.Img
          variant="top"
          src={item.img}
          className="fluid rounded"
          style={{ width: "230px", height: "234px" }}
        />
        <Card.Body>
          <a href={item.link}><Card.Title>{item.title}</Card.Title></a> 
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
