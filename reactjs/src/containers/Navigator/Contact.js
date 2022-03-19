import React, { Component } from "react";
import FooterPage from "../Footer/FooterPage";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import NewLetter from "../NewLetter/NewLetter";
import "../../More/styles/contact_styles.css";

export default class Contact extends Component {
  render() {
    return (
      <div class="super_container">
        <HeaderHomePage />
        <div class="container contact_container">
          <div class="row">
            <div class="col">
              <div class="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li class="active">
                    <a href="#">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div id="google_map">
                <div class="map_container">
                  <div id="map"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 contact_col">
              <div class="contact_contents">
                <h1>Contact Us</h1>
                <p>
                  There are many ways to contact us. You may drop us a line,
                  give us a call or send an email, choose what suits you the
                  most.
                </p>
                <div>
                  <p>0703593322</p>
                  <p></p>
                </div>
                <div>
                  <p>mm</p>
                </div>
                <div>
                  <p>Open hours: 8.00-18.00 Mon-Fri</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 get_in_touch_col">
              <div class="get_in_touch_contents">
                <h1>Get In Touch With Us!</h1>
                <p>
                  Fill out the form below to recieve a free and confidential.
                </p>
                <div>
                  <div>
                    <input
                      id="input_name"
                      class="form_input input_name input_ph"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                      data-error="Name is required."
                    />
                    <input
                      id="input_email"
                      class="form_input input_email input_ph"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      data-error="Valid email is required."
                    />
                    <input
                      id="input_website"
                      class="form_input input_website input_ph"
                      type="url"
                      name="name"
                      placeholder="Website"
                      required="required"
                      data-error="Name is required."
                    />
                    <textarea
                      id="input_message"
                      class="input_ph input_message"
                      name="message"
                      placeholder="Message"
                      rows="3"
                      required
                      data-error="Please, write us a message."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      id="review_submit"
                      type="submit"
                      class="red_button message_submit_btn trans_300"
                      value="Submit"
                    >
                      send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewLetter />

        <FooterPage />
      </div>
    );
  }
}
