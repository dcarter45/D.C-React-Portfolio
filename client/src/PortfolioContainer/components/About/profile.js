import React from "react";
import ReactDOM from "react-dom";
import Typical from "react-typical";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-details">
          <div className="colz">
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>

          <div className="about-details-name">
            <span className="primary-text">
              {""}
              Hello,I'M <span className="highlighted-text">Darrell</span>
            </span>
          </div>
          <div className="about-details-role">
              <span className="primary-text">
                  {""}
                  <h1>
                <Typical loop={Infinity}
                steps={[
                    "Enthusiastic Dev 🌏",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "React/React Native",
                    1000,
                    "Enthusiastic Dev",
                    1000,
                ]}
                />
                  </h1>
                  <span className="about-role-tagline">Building Front End and Back Ed Applications</span>
              </span>
          </div>
          <div className="about-options">
              <button className="btn primary-btn">
                  {""}
                  Hire Me{""}
              </button>
              <a href="resume.pdf" download="Darrell_RESUME.pdf">
                  <button className="btn highlighted btn">Get Resume</button>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
