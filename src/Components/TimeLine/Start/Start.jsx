import React, { useEffect, useState } from "react";
import "./Start.css";

const StartSection = () => {

  function getRandomInt() {
    return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  }
  const roles = [
    "Mobile Developer",
    "Web Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Software Engineer",
  ];
  const [currentRole, setCurrentRole] = useState("Software Engineer");
  const handleMouseLeave = () => {
    const randomRole = roles[getRandomInt(roles.length)];
    setCurrentRole(randomRole);
  };
  return (
    <section id="start" className="start-section">
      <div className="start-container">
        <h1 className="intro-text" 
        onMouseLeave={handleMouseLeave} 
        >
          Hi, I'm <span className="highlight">Talha Zahid</span> <br />
          {currentRole}
        </h1>
        <p className="description">
          I specialize in building modern web applications using the MERN stack,
          machine learning solutions, and more.
        </p>
        <div className="button-group">
          <button className="cta-button primary-button">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default StartSection;
