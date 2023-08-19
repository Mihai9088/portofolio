import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Home.css";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { socials } from "./social";
import Resume from "./Resume.pdf";

const Home = () => {
  return (
    <div className="home" id="home">
      <Navbar />
      <div className="main">
        <p>I'M</p>
        <h1>MIHAI</h1>
        <h3>Junior Web Developer</h3>
        <div className="row">
          <a className="explore" href={Resume} download="Resume">
            Download CV
            <span className="s1">
              <FaArrowDown />
            </span>
          </a>
          <a className="contact" href="#skills">
            My Skills
            <span className="s2">
              <FaArrowRight />
            </span>
          </a>
          <span className="btndesc">
            You Can See More About The <br />
            Technologies I Like To Use Here
          </span>
        </div>
      </div>
      <div className="social">
        <ul className="social-icons">
          {socials.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a className="aicons" href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
