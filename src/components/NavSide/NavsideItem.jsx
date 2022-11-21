import React,{useState} from 'react';
import {FaBars} from "react-icons/fa"
import "./style.css";
import { Link } from "react-router-dom";


const NavsideItem = ({item}) => {
    
  console.log(item.content.children)
  
 const {content,isOpen,setIsOpen} = item;


    return(
        <div className={isOpen ?'sidebar-items': "sidebar-items"} >
            <div className='sidebar-title'>
                <span>
                    <i className={content.icon}/>
                   <Link onClick={() => setIsOpen(!isOpen)} to={content.path}>{content.title}</Link> 
                </span>
            </div>
        </div>
    )
  
}

export default NavsideItem;
