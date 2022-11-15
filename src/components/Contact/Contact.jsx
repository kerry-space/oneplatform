import React from "react";
import Form from 'react-bootstrap/Form';
import instag from "../Animation/instagram.gif"
import "./style.css"


const Contact = () => {
  return (
    <div className="container contact">
        <div className="contact-wrapper d-flex  justify-content-center align-items-center">
           <a href="https://instagram.com/oneplatform_uf?igshid=YmMyMTA2M2Y=">

            <h1  className="text-center"><strong>Contact us via instgram</strong></h1>
           <img className="" style={{width: "200px", height: "100px"}} src={instag} alt=""/>

           </a>
            
        
           
        </div>
        <div className='container mb-11'>
    <h1 className='container text-center'>website is still under construction development </h1>
</div>
      <div className="form_content container"> 
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      </div>
      
    </div>
  );
};

export default Contact;
