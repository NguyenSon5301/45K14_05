import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";
import HomePage from "./HomePage/HomePage";

import CustomScrollbars from "../components/CustomScrollbars";
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";
import { path } from "../utils";
import Home from "../routes/Home";
import Login from "./Auth/Login";
import System from "../routes/System";

import RegisterUser from "./Customer/RegisterUser";
import UserLogin from "./Customer/UserLogin";
import SinglePr from "./Navigator/SinglePr";
import Contact from "./Navigator/Contact";
import Category from "./Category/Category";
import DetailBlog from "./Blog/DetailBlog";
import Blog from "./Navigator/Blog";
import HeaderBefore from "./HomePage/HeaderBefore";
import Cart from "./Cart/Cart";
import ScrollToTop from "./System/ScrollToTop";
class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();
  }

  render() {
    return (
      <Fragment>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          {/* <ScrollToTop /> */}
          <div className="main-container" style={{ fontFamily: "Arial" }}>
            <div className="content-container">
              <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
                <Switch>
                  {/* User */}
                  <Route path={path.HOME} exact component={Home} />
                  <Route
                    path={path.REGISTERUSER}
                    exact
                    component={RegisterUser}
                  />
                  <Route path={path.USERLOGIN} exact component={UserLogin} />
                  <Route path={path.HOMEPAGE} component={HomePage} />
                  <Route path={path.SINGLEPR} component={SinglePr} />
                  <Route path={path.CONTACT} component={Contact} />
                  <Route path={path.CATEGORY} component={Category} />
                  <Route path={path.DETAIL_BLOG} component={DetailBlog} />

                  <Route path={path.BLOGUSER} component={Blog} />
                  <Route path={path.BFLOGIN} component={HeaderBefore} />
                  <Route path={path.Cart} exact component={Cart} />

                  <Route
                    path={path.LOGIN}
                    component={userIsNotAuthenticated(Login)}
                  />
                  <Route
                    path={path.SYSTEM}
                    component={userIsAuthenticated(System)}
                  />
                </Switch>
              </CustomScrollbars>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
          </div>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
