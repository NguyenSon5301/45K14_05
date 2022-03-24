import React, { Component } from "react";
import FooterPage from "../Footer/FooterPage";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import NewLetter from "../NewLetter/NewLetter";
import "../../More/styles/contact_styles.css";
import address from "../../More/images/address.png";
import { sendEmail } from "../../services/userService";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import { path } from "../../utils/constant";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      text: "",
    };
  }
  handleChangeInput = (e, id) => {
    let copyState = { ...this.state };

    copyState[id] = e.target.value;
    this.setState({
      ...copyState,
    });
  };
  handleSendEmail = async () => {
    await sendEmail({
      name: this.state.name,
      email: this.state.email,
      text: this.state.text,
    });
  };
  render() {
    console.log("check state", this.state);
    return (
      <div class="super_container">
        <HeaderHomePage />
        <div class="container contact_container">
          <div class="row">
            <div class="col">
              <div class="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                  <li>
                    <NavLink to={path.HOMEPAGE}>Home</NavLink>
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
                  <img src={address} />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 contact_col">
              <div class="contact_contents">
                <h1>
                  <FormattedMessage id="Contact.header" />
                </h1>
                <p>
                  <FormattedMessage id="Contact.Title" />
                </p>
                <div>
                  <p>0703593322</p>
                  <p></p>
                </div>
                <div>
                  <p>
                    {" "}
                    <FormattedMessage id="Contact.time" />
                  </p>
                  <p>
                    {" "}
                    <FormattedMessage id="Contact.close-time" />
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 get_in_touch_col">
              <div class="get_in_touch_contents">
                <h1>
                  <FormattedMessage id="Contact.header-form" />
                </h1>
                <p>
                  <FormattedMessage id="Contact.title-form" />
                </p>
                <div>
                  <div>
                    <input
                      class="form_input input_name input_ph"
                      type="text"
                      name="name"
                      value={this.state.name}
                      placeholder="Name"
                      onChange={(e) => this.handleChangeInput(e, "name")}
                    />
                    <input
                      class="form_input input_email input_ph"
                      type="email"
                      value={this.state.email}
                      placeholder="Email"
                      onChange={(e) => this.handleChangeInput(e, "email")}
                    />
                    <textarea
                      class="input_ph input_message"
                      placeholder="Message"
                      rows="3"
                      value={this.state.text}
                      onChange={(e) => this.handleChangeInput(e, "text")}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="red_button message_submit_btn trans_300"
                      onClick={() => this.handleSendEmail()}
                    >
                      <FormattedMessage id="Contact.button-form" />
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
