import React from "react";
import  "./footer.css"

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
            <div className="colz-icon">
              <a href="https://github.com/dcarter45">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/darrell-carter-5030a3a9/">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://stackoverflow.com/users/14987928/darrell-carter">
                <i className="fa fa-stack-overflow" />
              </a>
            </div>
          </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Darrell Carter| All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
    
    </div>
  );
}

export default Footer;