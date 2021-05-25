import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/nav.css";
import { IconContext, iconContext } from "react-icons/lib";
import logo from "../assests/pl-logo.png";
function Navbar() {
  const [click, setClick] = useState(false);
  const toggle = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#7f7afc" }}>
        <header className="header">
          <div className={`${click ? "none" : "header__logo"}`}>
            <img src={logo} alt="" />
            <div class="header__logo__name">Pura Vida</div>
          </div>
          <ul className={`${click ? "nav-active" : "nav"}`}>
            <li className="nav__item">
              <a href="" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Residential
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Porfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
          <div className="header__number">CALL 623-567-9891</div>
        </header>
        <div className="menu-icon" onClick={toggle}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
