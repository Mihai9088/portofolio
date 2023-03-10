import React, { useState } from "react";
import "./Navbar.css";
import { links } from "./Links";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <a className="container " href="#">
        M <span className="letter">V</span>
      </a>

      <div className={isNavExpanded ? "links expanded" : "links"}>
        <div className="navmenu">
          <ul className="links">
            {links.map((item) => {
              const { id, text } = item;
              return (
                <li key={id}>
                  <a className="link" href="#">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className="hamburger"
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
