import React from "react";
import "./style.scss";
import teamBuild from "../images/engineering_team.svg";
import teamImg from "../images/team_spirit.svg";


const About = () => {
  return (
    <div className=" about">
      <div className="about_text_title">
        <h1 className="text-center">
          <strong>About us</strong>
        </h1>
       <div className="container-fluid">
        <div className="row">
          <div className="col-12 px-0">
          <img className="img-fluid" src={teamImg} alt="" />
          </div>

        </div>

       </div>
      </div>

      <div className="row about_container">
        <div className="conatiner about_container_title col-sm ">
          <h1>
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
            <br />
            <br />
          </p>
        </div>
        <div className="container about_container_img col-sm">
          <img className="img-fluid rounded" src={teamBuild} alt="" />
        </div>
      </div>


    </div>
  );
};

export default About;
