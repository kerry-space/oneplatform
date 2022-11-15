import React,{useState} from 'react';
import {FaBars} from "react-icons/fa"
import "./style.css";
import { Link } from "react-router-dom";

const NavsideItem = ({item}) => {
    
    const [open, setOpen] = useState(false);
    console.log(item)

  if(item.children){ 
    return (
        <div className={open ?'sidebar-items open': "sidebar-items" }>
            <div className='sidebar-title'>
                <span>
                    <i className={item.icon}/>
                    <Link to={item.path}>{item.title}</Link>
                </span>
                <i className="bi bi-chevron-up toggle-btn" onClick={() =>setOpen(!open)}></i>
            </div>
    
            <div className='sidebar-content'>
            <Link to={item.children[0].path}>{item.children[0].title}</Link>
            </div>
        </div>
      );
  }else{
    return(
        <div className='sidebar-items'>
            <div className='sidebar-title'>
                <span>
                    <i className={item.icon}/>
                   <Link to={item.path}>{item.title}</Link> 
                </span>
            </div>
        </div>
    )
  }
}

export default NavsideItem;
