import React,{useState} from 'react';
import {FaBars} from "react-icons/fa"
import "./style.css";

const NavsideItem = ({item}) => {
    
    const [open, setOpen] = useState(false);
    console.log(item)

  if(item.children){ 
    return (
        <div className={open ?'sidebar-items open': "sidebar-items" }>
            <div className='sidebar-title'>
                <span>
                    <i className={item.icon}/>
                    <a href={item.path}>{item.title}</a>
                </span>
                <i className="bi bi-chevron-up toggle-btn" onClick={() =>setOpen(!open)}></i>
            </div>
    
            <div className='sidebar-content'>
            <a href={item.children[0].path}>{item.children[0].title}</a>
            </div>
        </div>
      );
  }else{
    return(
        <div className='sidebar-items'>
            <div className='sidebar-title'>
                <span>
                    <i className={item.icon}/>
                   <a href={item.path}>{item.title}</a> 
                </span>
            </div>
        </div>
    )
  }
}

export default NavsideItem;
