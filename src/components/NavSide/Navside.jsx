import React from 'react';
import { NavLink as Link } from "react-router-dom";
import NavsideItem from './NavsideItem';
import "./style.css";
import items from "./data.json"


import { AiOutlineClose } from "react-icons/ai";

const Navside = ({isOpen, setIsOpen}) => {
  return (

    <div className='sidebar rounded'>
        <button className='close-btn' onClick={() =>setIsOpen(!isOpen)}><AiOutlineClose size={50} /></button>
        {items.map((item,index) => <NavsideItem key={index} item={item}/>)

        }
    </div>

  );
}

export default Navside;
