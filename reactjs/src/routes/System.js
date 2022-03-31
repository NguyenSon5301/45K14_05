import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/UserManage";
import ProductManage from "../containers/System/ProductManage";
import Header from "../containers/Header/Header";
import BlogManage from "../containers/System/BlogManage";
import ContactManage from "../containers/System/ContactManage";
import ProductOderManage from "../containers/System/ProductOderManage";

class System extends Component {
  render() {
    const { systemMenuPath } = this.props;
    return (
      <>
        {this.props.isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/user-manage" component={UserManage} />
              <Route path="/system/product-manage" component={ProductManage} />
              <Route path="/system/blog-manage" component={BlogManage} />
              <Route path="/system/contact-manage" component={ContactManage} />
              <Route
                path="/system/order-manage"
                component={ProductOderManage}
              />

              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
