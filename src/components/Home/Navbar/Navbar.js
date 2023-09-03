import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { links } from "./Links";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isNavExpanded &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsNavExpanded(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsNavExpanded(false);
      }
    };

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscapeKey);
      window.onscroll = null;
    };
  }, []);

  const handleNavToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <a className="container " href="#home">
        M <span className="letter">V</span>
      </a>

      <div className={isNavExpanded ? "links-expanded" : "links"} ref={navRef}>
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
