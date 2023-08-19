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
            <div data-aos="flip-left" data-aos-delay="100">
              <div className="card-cont">
                <div className="card">
                  <img src={image3} alt="" className="card-img" />
                  <div className="intro">
                    <div className="h1-btn-cont">
                      <h1 className="cardh1">hello</h1>
                      <div className="btn-cont">
                        <a className="cbtn1">
                          <FaEye />
                        </a>
                        <a className="cbtn2">
                          <FaGithub />
                        </a>
                      </div>
                    </div>

                    <p className="cardp">
                      perspiciatis deleniti accusamus dignissimos commodi omnis!
                      Excepturi animi reiciendis eum quisquam corporis nostrum?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="flip-left" data-aos-delay="200">
              <div className="card-cont">
                <div className="card">
                  <img src={image3} alt="" className="card-img" />
                  <div className="intro">
                    <div className="h1-btn-cont">
                      <h1 className="cardh1">hello</h1>
                      <div className="btn-cont">
                        <a className="cbtn1">
                          <FaEye />
                        </a>
                        <a className="cbtn2">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    <p className="cardp">
                      perspiciatis deleniti accusamus dignissimos commodi omnis!
                      Excepturi animi reiciendis eum quisquam corporis nostrum?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="300">
              <div className="card-cont">
                <div className="card">
                  <img src={image3} alt="" className="card-img" />
                  <div className="intro">
                    <div className="h1-btn-cont">
                      <h1 className="cardh1">hello</h1>
                      <div className="btn-cont">
                        <a className="cbtn1">
                          <FaEye />
                        </a>
                        <a className="cbtn2">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    <p className="cardp">
                      perspiciatis deleniti accusamus dignissimos commodi omnis!
                      Excepturi animi reiciendis eum quisquam corporis nostrum?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="400">
              <div className="card-cont">
                <div className="card">
                  <img src={image3} alt="" className="card-img" />
                  <div className="intro">
                    <div className="h1-btn-cont">
                      <h1 className="cardh1">hello</h1>
                      <div className="btn-cont">
                        <a className="cbtn1">
                          <FaEye />
                        </a>
                        <a className="cbtn2">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    <p className="cardp">
                      perspiciatis deleniti accusamus dignissimos commodi omnis!
                      Excepturi animi reiciendis eum quisquam corporis nostrum?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </WaterWave>
    </div>
  );
};

export default Projects;
