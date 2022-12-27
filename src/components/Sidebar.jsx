import React, {useState} from 'react'
import{
    FaTh,
    FaBars,
    FaHome,
    FaReceipt,
    FaPager
}from "react-icons/fa";
import {
     BsFillMenuAppFill,
    
    } from "react-icons/bs";

import { 
     MdBorderColor 
} from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/table",
            name:"Table",
            icon:<FaTh/>
        },
        {
            path:"/",
            name:"Menu",
            icon:<BsFillMenuAppFill/>
        },
        {
            path:"/order",
            name:"Order",
            icon:<MdBorderColor/>
        },
        {
            path:"/bill",
            name:"Bill",
            icon:<FaReceipt/>
        },
        {
            path:"/payment",
            name:"Payment",
            icon:<FaPager/>
        },
    ]
  return (
    <>
        <div style={{width:isOpen ? "250px" : "50px" }} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active"> 
                        <div className="icon">{item.icon}</div>
                         <div style={{display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>                 
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
      
    </>
  )
}

export default Sidebar
