import React from "react";
import Typical from "react-typical";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-details">
          
          <div className="about-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Darrell</span>
            </span>
          </div>
          <div className="about-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1500,
                    "Full stack Developer 💻",
                    1500,
                    "Mern stack Dev 📱",
                    1500,
                    "Cross Platform Dev 🔴",
                    1500,
                    "React/React Native 🌐",
                    1500,
                  ]}
                />
              </h1>
            </span>
          </div>
          <div className="about-paragraph">
            <p className="about-content">
              
<div className="about-p">Your friendly junior developer who is currently attending<br/> the Georgia Tech Coding Bootcamp. All of my life I've been in pursuit of my passion,<br/> i'm glad to say that with software development that I believe I have found that passion<br/>..During my time as a student of the bootcamp, I have learned several new skills<br/> and attributes that i'm eager to put to work in real world applications.</div>
            </p>
          </div>
        </div>
        <div className="about-picture">
          <div className="about-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
