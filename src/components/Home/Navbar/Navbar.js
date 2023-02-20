import React, { useState } from "react";
import "./Navbar.css";
import { links } from "./Links";

const Navbar = () => {
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
      <div className="ulcont">
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
    </nav>
  );
};

export default Navbar;
