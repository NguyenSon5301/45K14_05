import React, { Component } from "react";
import FooterPage from "../Footer/FooterPage";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import NewLetter from "../NewLetter/NewLetter";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { path } from "../../utils/constant";
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrBlogs: [],
    };
  }
  componentDidMount() {
    this.props.fetchAllBlogs();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.arrBlogs !== prevProps.arrBlogs) {
      let { arrBlogs } = this.props;
      this.setState({
        arrBlogs: arrBlogs,
      });
    }
  }
  handleViewDetailBlog = (item) => {
    this.props.history.push(`/detail_blog/${item.id}`);
  };
  render() {
    let { arrBlogs } = this.state;
    console.log("check blog", this.props.arrBlogs);
    return (
      <div className="container">
        <div class="row blogs_container">
          <div
            class="breadcrumbs d-flex flex-row align-items-center "
            style={{ "margin-top": "100px" }}
          >
            <ul>
              <li>
                <NavLink to={path.HOMEPAGE}>Home</NavLink>
              </li>
              <li class="active">
                <NavLink to={path.CONTACT}>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {arrBlogs.map((item, index) => {
            let imageBase64 = "";
            if (item.image) {
              imageBase64 = new Buffer(item.image, "base64").toString("binary");
            }
            return (
              <div class="col-lg-4 blog_item_col">
                <div
                  class="blog_item"
                  style={{ "margin-bottom": "30px", "margin-top": "0" }}
                  key={item.id}
                  onClick={() => this.handleViewDetailBlog(item)}
                >
                  <div
                    class="blog_background"
                    style={{ backgroundImage: `url(${imageBase64})` }}
                  ></div>
                  <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                    <h4 class="blog_title">{item.description}</h4>
                    <span class="blog_meta">{item.createdAt}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <HeaderHomePage />
        <NewLetter />

        <FooterPage />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    arrBlogs: state.admin.blogData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBlogs: () => dispatch(actions.fetchAllBlogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
