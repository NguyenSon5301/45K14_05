import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { path } from "../../utils/constant";
import "./Footer.css";

export default class FooterPage extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                  <ul className="footer_nav">
                    <li>
                      <NavLink to={path.BLOGUSER}>Blog</NavLink>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <NavLink to={path.CONTACT}>Contact us</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
