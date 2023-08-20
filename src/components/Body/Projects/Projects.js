import React from "react";
import "./Projects.css";
import WaterWave from "react-water-wave";
import image3 from "./shop.png";
import { FaGithub, FaEye } from "react-icons/fa";
import data from "./ProjectsData";

const Projects = () => {
  return (
    <div className="projectsBg" id="portofolio">
      <WaterWave
        className="valuri"
        perturbance={0}
        resolution={512}
        dropRadius={30}
      >
        {(methods) => (
          <div className="all-cont">
            {data.map((card, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="card-cont">
                  <div className="card">
                    <img src={card.image} alt="" className="card-img" />
                    <div className="intro">
                      <div className="h1-btn-cont">
                        <h1 className="cardh1">{card.title}</h1>
                        <div className="btn-cont">
                          <a className="cbtn1" href={card.urlFirst}>
                            <FaEye />
                          </a>
                          <a className="cbtn2" href={card.urlSecond}>
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                      <p className="cardp">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </WaterWave>
    </div>
  );
};

export default Projects;
