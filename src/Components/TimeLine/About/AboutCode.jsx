import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'prismjs/themes/prism.css'; 

const CodeSnippet = () => {
  const classCode = `
class TalhaZahid {
  constructor() {
    this.name = 'Talha Zahid';
    this.dayOfBirthTimestamp = 1026805756;
    this.email = 'talhazahid980@gmail.com';
  }

  academicProjects() {
    return [
      { name: 'Final Year Project', description: 'Brain Talk (React Native, Machine Learning, Data Science) - An ML-based app converting brain signals into words for disabled individuals.' },
      { name: 'Client Comm', description: "(React, Node.js, Express.js, Socket.IO, Flutter) - Admin-based web platform for a real-time chat application, connecting users through a Flutter client and a React/Node.js backend" },
      { name: 'Resume Builder and CV Ranker', description: 'Web-based app (React, JavaScript, Python) categorizing and ranking resumes based on job descriptions.' },
      { name: 'Food Waste Control', description: 'Website (HTML, CSS, JavaScript, Node.js) for donating extra food and serving the needy.' },
      { name: 'E-voting Mobile Application', description: 'Android app (Java, Firebase) enabling voting through CNIC and email verification.' },
      { name: 'Arabic Dictionary', description: 'Java desktop app (MySQL, Eclipse, MVC) translating Arabic words into Urdu and handling Arabic roots.' },
      { name: 'Crick Buzz', description: 'C# app for managing cricket match schedules, scores, news, and rankings.' },
      { name: 'Candy Crush', description: 'C++ game developed using Visual Studio.' },
    ];
  }

  workExperience() {
    return [
      { duration: 'August 2024 - October 2024', role: 'MERN Stack Developer Intern at Maaz Informatics' },
      { duration: 'June 2024 - September 2024', role: 'Research Assistant for ML-based Brain-Computer Interface Project at FAST NUCES' },
      { duration: 'June 2023 - September 2023', role: 'Teaching Assistant for Probability and Statistics at FAST NUCES' },
      { duration: 'September 2022 - Fab 2023', role: 'Teaching Assistant for Discrete Structures at FAST NUCES' }
    ];
  }

  skills() {
    return [
      'HTML', 'CSS', 'JavaScript', 'React JS', 'React Native', 'Node JS', 'Express JS',
      'Python','Docker', 'Java','C/C++', 'MySQL', 'MongoDB', 'Full Stack', 'Google Cloud Firebase',
      'Android Studio','Machine Learning','NumPy', 'pandas', 'SciKit Learn', 'TensorFlow', 
      'Software architecture patterns (MVC, MVP)','Design patterns (Singleton, Facade, Observer)',
      'Software design diagrams (Component, Activity, Sequence)'
    ];
  }
}
  `;

  return (
    <div style={styles.container}>
      <SyntaxHighlighter language="javascript" style={solarizedlight} customStyle={styles.syntaxHighlighter}>
        {classCode}
      </SyntaxHighlighter>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#14121C',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
  syntaxHighlighter: {
    background: 'transparent', 
    borderRadius: '8px',
  },
};

export default CodeSnippet;
