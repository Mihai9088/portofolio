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
    <div className="section" id="about">
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
              <p className="par1">
                Hello! My name is Voina Mihai and I live in Sibiu, Romania.I
                consider myself a sociable and friendly person, I have always
                liked teamwork, so the integration in a new community was never
                a problem.
              </p>
              <p className="par2">
                I started programming in 2022, I chose JavaScript because it's
                versatility appealed to me, it gives me the ability to work on
                all parts of a web application. Web Development is a constantly
                growing field, which motivated me to invest time and effort in
                learning this language.
              </p>
              <div className="a-links">
                <a className="about-a1" href="#skills">
                  Skills
                </a>
                <a className="about-a2" href="#portofolio">
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
