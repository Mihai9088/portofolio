import React from "react";
import Navbar from "./Navbar/Navbar";
import image from "./bg.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img src={image} alt="" />
    </div>
  );
};

export default Home;
