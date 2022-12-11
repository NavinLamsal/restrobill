import React from 'react'
import img1 from './img/Asset1.png'
import DateTime from './DateTime'
import { Link } from "react-router-dom";

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
              <li className="nav-item">
                <Link to={'/home'} className='nav-link active'>Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="/Home">Home</a> */}
              </li>
              <li className="nav-item">
                <Link to={'/table'} className='nav-link active'>Table</Link>
                {/* <a className="nav-link active" aria-current="page" href="/Table">Table</a> */}
              </li>
              <li className="nav-item">
                <Link to={'/menu'} className='nav-link active'>Menu</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Menu</a> */}
              </li>
              <li className="nav-item">
                <Link to={'/order'} className='nav-link active'>Order</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Order</a> */}
              </li>
              <li className="nav-item">
                <Link to={'/bill'} className='nav-link active'>Bill</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Bill</a> */}
              </li>
              <li className="nav-item">
                <Link to={'/payment'} className='nav-link active'>Payment</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Payment</a> */}
              </li>
            </ul>
            <form className="d-flex" role="search">
              <DateTime />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
