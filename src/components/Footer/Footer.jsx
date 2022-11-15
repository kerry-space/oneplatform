import React from "react";
import "./style.scss";
import appstore from "../images/icons-app-store.svg";
import googlePlay from "../images/icons-google-play.svg";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column  ">
      <div className="menu-footer  ">
        <div className="d-flex flex-row ">
          <div className="mx-5  border-2 rounded">
            <a href="" className="d-flex  mx-2">
              <img src={appstore} />
              Download on the <br />
               App Store
            </a>
          </div>
          <div className=" border-2 rounded ">
            <a href="" className="d-flex mx-2">
              <img src={googlePlay} />
              Download on the <br />
              Google Play
            </a>
          </div>
        </div>
      </div>
      <div className="footer_copright mt-8 justify-between ">
        <p>
          All Rights Reserved. <b>onePlatform</b>
          <br />
          All logos are registered . All contents are copyright © 2022{" "}
          <b>onePlatform</b> Owner.
        </p>
        <div className="pt-2">
            <a href="security" className="pr-3" >Security</a>
            <a href=" privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
