import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container ">
        <Link className="navbar-brand text-danger" to={'/'}>
          Movie App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item me-3">
              <Link
                to={"/"}
                className="nav-link text-white"
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link 
                to={"/about"} 
                className="nav-link text-white"
              >
                About
              </Link>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link text-white" href="#">
                User Reviews
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
