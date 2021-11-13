import React from "react";
import Typical from "react-typical";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-details">
          <div className="colz">
            <div className="colz-icon">
              
              <a href="https://github.com/dcarter45">
                <i className="fa fa-github fa-lg" />
              </a>
              <a href="https://www.linkedin.com/in/darrell-carter-5030a3a9/">
                <i className="fa fa-linkedin-square fa-lg" />
              </a>
              
            </div>
          </div>
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
            <span className="about-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>
        </div>
        <div className="about-picture">
          <div className="about-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
