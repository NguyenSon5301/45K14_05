import React, { Component } from "react";
import { sendNewLetter } from "../../services/userService";
import { FormattedMessage } from "react-intl";
import "./NewLetter.css";
import { toast } from "react-toastify";

export default class NewLetter extends Component {
  state = {
    email: "",
  };
  InputEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onSendNewLetter = async () => {
    await sendNewLetter({
      email: this.state.email,
    });
    toast.success("send new letter succeed");
  };
  render() {
    return (
      <div className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                <h4>Newsletter</h4>
                <p>
                  <FormattedMessage id="letter.title" />
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="post">
                <div className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                  <input
                    id="newsletter_email"
                    type="email"
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={(e) => this.InputEmail(e)}
                  />
                  <button
                    type="button"
                    className="newsletter_submit_btn trans_300"
                    onClick={() => this.onSendNewLetter()}
                  >
                    <FormattedMessage id="letter.sub" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
