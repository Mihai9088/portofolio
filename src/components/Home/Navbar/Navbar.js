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

  const handleNavToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <a className="container " href="#home">
        M <span className="letter">V</span>
      </a>

      <div className={isNavExpanded ? "links-expanded" : "links"}>
        <div className={isNavExpanded ? "expnav" : "navmenu"}>
          <ul className="links">
            {links.map((item) => {
              const { id, text, sectionId } = item;
              return (
                <li className="li" key={id}>
                  <a className="link" href={`#${sectionId}`}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button onClick={handleNavToggle} className="hamburger">
        {isNavExpanded ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
