import React from "react";
import "./About.css";
import image from "./image.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="section">
      <div className="hero">
        <div data-aos="fade-right">
          <div className="img-cont">
            <img src={image} className="profile-img" alt="" />
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="cont">
            <h1>About Me</h1>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                tempore non, fugit consequatur sint sit facilis suscipit
                architecto ratione reprehenderit ad dolorem reiciendis
                necessitatibus perspiciatis!
              </p>
              <p className="p2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus, adipisci.
              </p>
              <div className="a-links">
                <a className="about-a1" href="#">
                  Skills
                </a>
                <a className="about-a2" href="#">
                  Portofolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
