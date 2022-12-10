import React from 'react'
import img1 from './img/Asset1.png'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow p-3 mb-5">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/"><img src={img1} alt="Logo" width="50%" height="40%"/></a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Table</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Order</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Bill</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Payment</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
