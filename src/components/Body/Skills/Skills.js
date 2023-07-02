import React from "react";
import { skills } from "./data";
import "./Skills.css";
import Aos from "aos";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-cont">
      <div className="skills-container">
        <div className="title">Technologies I Enjoy Working With</div>
        <div className="contskills">
          {skills.map((skillIcon) => {
            const { id, name, icon } = skillIcon;
            return (
              <div key={id} className="card-cont">
                <div className="skills">
                  <div className="rskills">{name}</div>
                  <span className="skill-span">{icon}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="divider">
        <div className="square">
          <span>M</span>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Skills;
