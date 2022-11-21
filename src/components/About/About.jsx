import React from "react";
import "./style.scss";
import teamBuild from "../images/engineering_team.svg";
import teamImg from "../images/team_spirit.svg";

const About = () => {
  return (
    <div className=" about">
      <div className="about_text_title ">
        <h1 className="text-center ">
          <strong>About us</strong>
        </h1>

        <div className="container d-flex justify-content-center my-5">
          <img className="img-fluid  rounded" src={teamImg} alt="" />
        </div>
      </div>

      <div className="container about_container my-5">
        <div className="conatiner about_container_title  my-5">
          <h1 className="my-3">
            <strong>who we are</strong>
          </h1>
          <p>
            We are onePlatform, onePlatform is a tech business company, we
            create custom strategies for each of our clients based on their
            needs and goals.We are one group of freelancers, our core focus is
            design and simplicity to build web applications that fits our
            customers needs. With all in OnePlatform, helps you to reach more
            people by establishing your brand across every operating system,
            whether that be Android,ios,Pc, etc.
            <br/>
            <br/>
            Oneplatform is different from must tech bussiness company out there, we are open to any  
            suggesten relatet to bussines idea from customer, if you have an idea of the business and you’d like to start it but dont know how,
            you might be looking for some direction. we can help you easily to launch a small business.
            <br />
            <br />
          </p>
        </div>
        <div className="container  who-section ">
          <img className="img-fluid rounded" src={teamBuild} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
