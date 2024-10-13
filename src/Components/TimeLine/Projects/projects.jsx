import React from "react";
import "./projects.css"; // Import your CSS file
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
        name: "ClientComm",
        description: "Admin-based web platform for a real-time chat application, connecting users through a Flutter client and a React/Node.js backend.",
        tools: "React, Node.js, Socket.IO, Flutter"
    },
    {
      name: "Brain Talk",
      description: "An ML-based chatting app for disabled people.",
      tools: "React Native, Machine Learning, Data Science",
    },
    {
      name: "Resume Builder and CV Ranker",
      description: "Web app for categorizing and ranking resumes.",
      tools: "React, JavaScript, Python",
    },
    {
      name: "Food Waste Control",
      description: "Website to donate extra food.",
      tools: "HTML, CSS, JavaScript, Node.js",
    },
    {
      name: "E-voting Mobile Application",
      description: "Android app for secure voting.",
      tools: "Java, Android Studio, Firebase",
    },
    {
      name: "Arabic Dictionary",
      description: "Desktop app for translating Arabic to Urdu.",
      tools: "Java, MySQL, Eclipse",
    },
    {
      name: "Crick Buzz",
      description: "App for managing cricket schedules and scores.",
      tools: "C#",
    },
    {
      name: "Candy Crush",
      description: "Game developed in C++.",
      tools: "C++",
    },
  ];
  return (
    <section id="projects" >
      <div className="scrollable-div">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              index={index}
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
