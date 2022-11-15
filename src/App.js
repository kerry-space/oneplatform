import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


//all components



import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Jobs from "./components/Jobs/Jobs";


import Footer from "./components/Footer/Footer";

import Navside from "./components/NavSide/Navside";

//diffent service category
import BasicWebsite from "./components/Service/serviceCategory/BasicWebsite";
import SmallBuss from "./components/Service/serviceCategory/SmallBuss";
import MeduimBuss from "./components/Service/serviceCategory/MeduimBuss";
import AppWebsite from "./components/Service/serviceCategory/AppWebsite";

import Support from "./Support";
import ReportBug from "./ReportBug";

import { FaBars } from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);


 

  return (
 
      <div className="main">
        {isOpen ? (
          <Navside isOpen={isOpen} setIsOpen={setIsOpen} />
        ) : (
          <div className="menu-open">
            <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
              <FaBars size={50} />
            </button>
          </div>
        )}

        <div className="">
          {/*create all routes */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/basic" element={<SmallBuss />} />
            <Route path="/smallbuss" element={<BasicWebsite />} />
            <Route path="/meduim" element={<MeduimBuss />} />
            <Route path="/appwebsite" element={<AppWebsite />} />
            <Route path="/support" element={<Support />} />
            <Route path="/reportbug" element={<ReportBug />} />
          </Routes>
          <Footer />
        </div>
      </div>

  );
}

export default App;
