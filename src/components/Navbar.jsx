import React from 'react'
import img1 from './img/Asset1.png'

import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

export default function NavbarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow p-3 mb-5">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/"><img src={img1} alt="Logo" width="50%" height="40%" /></a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* if anything to add in navbar at left side the add here as below code  */}
              {/* <li className="nav-item">
                <Link to={'/payment'} className='nav-link active'>Payment</Link>
              </li> */}
            </ul>
            <ul className="d-flex" >
              <li className="nav-item">
                <div className="icon">{MdLogout}</div>
              </li>
              <li className="nav-item">
                <div className="icon">{BsPersonFill}</div>
              </li>
              <li className="nav-item">
                 <Link to={'/profile'} className='nav-link active'>Username</Link>
              </li>
            
            
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
