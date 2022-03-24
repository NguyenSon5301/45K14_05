import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./Benefit.css";
export default class Benefit extends Component {
  render() {
    return (
      <div className="benefit">
        <div className="container">
          <div className="row benefit_row">
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon">
                  <i className="fa fa-truck" aria-hidden="true"></i>
                </div>
                <div className="benefit_content">
                  <h6>
                    <FormattedMessage id={"Benefit.Free-ship"} />
                  </h6>
                  <p>
                    <FormattedMessage id={"Benefit.Title-free-ship"} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon">
                  <i className="fa fa-money" aria-hidden="true"></i>
                </div>
                <div className="benefit_content">
                  <h6>
                    <FormattedMessage id={"Benefit.Cash-on-delivery"} />
                  </h6>
                  <p>
                    <FormattedMessage id={"Benefit.Title-cash"} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon">
                  <i className="fa fa-undo" aria-hidden="true"></i>
                </div>
                <div className="benefit_content">
                  <h6>
                    {" "}
                    <FormattedMessage id={"Benefit.Return"} />
                  </h6>
                  <p>
                    {" "}
                    <FormattedMessage id={"Benefit.Title-return"} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div className="benefit_content">
                  <h6>
                    {" "}
                    <FormattedMessage id={"Benefit.Opening-all-week"} />
                  </h6>
                  <p>
                    {" "}
                    <FormattedMessage id={"Benefit.Time"} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
