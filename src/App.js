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
            <Route exact path="/oneplatform.io" element={<Home />} />
            <Route path="/oneplatform.io/service" element={<Service />} />
            <Route path="/oneplatform.io/about" element={<About />} />
            <Route path="/oneplatform.io/contact" element={<Contact />} />
            <Route path="/oneplatform.io/jobs" element={<Jobs />} />
            <Route path="/oneplatform.io/basic" element={<SmallBuss />} />
            <Route path="/oneplatform.io/smallbuss" element={<BasicWebsite />} />
            <Route path="/oneplatform.io/meduim" element={<MeduimBuss />} />
            <Route path="/oneplatform.io/appwebsite" element={<AppWebsite />} />
            <Route path="/oneplatform.io/support" element={<Support />} />
            <Route path="/oneplatform.io/reportbug" element={<ReportBug />} />
          </Routes>
          <Footer />
        </div>
      </div>

  );
}

export default App;
