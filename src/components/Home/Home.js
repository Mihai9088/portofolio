import React from "react";
import Navbar from "./Navbar/Navbar";
import image from "./bg.jpg";
import "./Home.css";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { socials } from "./social";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main">
        <p>I'M</p>
        <h1>MIHAI</h1>
        <h3>i am just existing</h3>
        <div className="row">
          <a className="explore" href="#">
            Download CV
            <span className="s1">
              <FaArrowDown />
            </span>
          </a>
          <a className="contact" href="#">
            My Skills
            <span className="s2">
              <FaArrowRight />
            </span>
          </a>
          <span>
            You Can See More About My Portofolio And <br />
            Personal Life Experience here
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
