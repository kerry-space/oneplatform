import React from 'react';
import { NavLink as Link } from "react-router-dom";
import NavsideItem from './NavsideItem';
import "./style.css";
import items from "./data.json"


import { AiOutlineClose } from "react-icons/ai";

const Navside = ({isOpen, setIsOpen}) => {
  return (

    <div className='sidebar  '>
       
        {items.map((content,index) => <NavsideItem key={index}  item={{content,isOpen,setIsOpen}}/>)

        }
    </div>

  );
}

export default Navside;
