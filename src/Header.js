import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg w-100 bg-transparent header px-2 px-md-3 ">
      <div className="container-fluid border_rad py-2 py-md-0 shadow1">
        {/* <a className="navbar-brand text-white logo" href="#">
          Navbar
        </a> */}
        <div className="col-1">
          <Link to={"/"}>
            <img className="logo_styled8" src="/assets/logo2.png" alt="" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav   mb-2 mb-lg-0">
            <NavLink
              to={"/"}
              activeclassname="active"
              className="nav-link  mob_3jh"
              aria-current="page"
              href="#"
            >
              APOCALYPTICATS
            </NavLink>

            <NavLink
              activeclassname="active"
              to={"/whitepaper"}
              className="nav-link  mob_3jh"
              aria-current="page"
              href="#"
            >
              WHITEPAPER
            </NavLink>
          </ul>
        </div>
        <h1 className="m-0 nav-link px-0 px-md-2 pb-2 pb-md-2 mob_3jh">
          <NavLink
            to={"/conect"}
            activeclassname="active"
            className="nav-link  mob_3jh"
            aria-current="page"
            href="#"
          >
            CONNECT TO WALLET
          </NavLink>
        </h1>
      </div>
    </nav>
  );
}

export default Header;
