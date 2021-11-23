import React from "react";
import "./Portfolio.css";
import BudgetTracker from "./images/BudgetTracker.png";
import Ecommerce from "./images/Ecommerce.PNG";
import TeamProfile from "./images/TeamProfile.PNG";
import TechBlog from "./images/techBlog.PNG";
import Weather from "./images/weather.PNG";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div class="row">
        <div class="col">
          <ul>
            <h1 className="project-title">
              Playlist Generator (Group Project)
            </h1>

            <li className="single-project">
              <img
                className="image"
                src="https://github.com/d4nnyq88/tune-time/raw/main/public/images/dashboardOfficial.jpg"
                alt="single-project"
              ></img>
              <a href="https://tune-time.herokuapp.com/">
                <h1 className="link-title">Live app deployment</h1>
              </a>
              <a href="https://github.com/dcarter45/tune-time">
                <h1 className="link-title">Github Repo</h1>
              </a>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <h1 className="project-title">Offline Budget application </h1>

            <li className="single-project">
              <img
                className="image"
                src={BudgetTracker}
                alt="single-project"
              ></img>
              <a href="https://guarded-shelf-02222.herokuapp.com/">
                <h1 className="link-title">Live app deployment </h1>
              </a>
              <a href="https://github.com/dcarter45/budget-tracker">
                <h1 className="link-title">Github Repo </h1>
              </a>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <h1 className="project-title">Ecommerce (Backend)</h1>

            <li className="single-project">
              <img className="image" src={Ecommerce} alt="single-project"></img>
              <a href="https://github.com/dcarter45/ecommerce">
                <h1 className="link-title">Github Repo</h1>
              </a>
              <a href="https://watch.screencastify.com/v/OitChbKhTDr3YVovpTbA">
                <h1 className="link-title">Demo Video Walkthrough</h1>
              </a>
            </li>
          </ul>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <ul>
            <h1 className="project-title">Team Generator (Backend)</h1>

            <li className="single-project">
              <img
                className="image"
                src={TeamProfile}
                alt="single-project"
              ></img>
              <a href="https://github.com/dcarter45/Team-Profile-Generator">
                <h1 className="link-title">Github Repo </h1>
              </a>
              <a href="https://watch.screencastify.com/v/Y6qlEtDlCvxEYnYbs5P5">
                <h1 className="link-title">Demo Video Walkthrough </h1>
              </a>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <h1 className="project-title">Weather API Dashboard </h1>
            <li className="single-project">
              <img
                className="image"
                src={Weather}
                alt="weather screenshot"
              ></img>
              <a href="https://dcarter45.github.io/Weather-api/">
                <h1 className="link-title">Live app deployment </h1>
              </a>
              <a href="https://github.com/dcarter45/Weather-api">
                <h1 className="link-title">Github Repo </h1>
              </a>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <h1 className="project-title">Tech Blog Social Site </h1>

            <li className="single-project">
              <img className="image" src={TechBlog} alt="single-project"></img>
              <a href="https://watch.screencastify.com/v/5ezECpkT2HWc0nNN6Tda">
                <h1 className="link-title">Demo Video Walkthrough </h1>
              </a>
              <a href="https://github.com/dcarter45/tech-blog">
                <h1 className="link-title">Github Repo </h1>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
