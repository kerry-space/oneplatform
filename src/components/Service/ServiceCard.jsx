import React from "react";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

import "./style.scss"

const serviceCard = ({content}) => {
  const item = content;
  return (
    <Card className="card" style={{width: "332,25px", height: "414px", rowGap: "0px"}}>
      <Card.Img variant="top" src={item.img} style={{width: "250px", height: "188px", padding: ""}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" className="">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default serviceCard;
