import React, { Component } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import { connect } from "react-redux";
import { saveBlog } from "../../services/userService";
import { toast } from "react-toastify";
import CommonUtils from "../../utils/CommonUtils";

const mdParser = new MarkdownIt(/* Markdown-it options */);
class BlogManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      imageBase64: "",

      descriptionMD: "",
      descriptionHTML: "",
      arrBlogs: [],
    };
  }
  handleOnChangeInput = (event, id) => {
    let stateCoppy = { ...this.state };
    stateCoppy[id] = event.target.value;
    this.setState({
      ...stateCoppy,
    });
  };

  // save markdown
  handleEditorChange = ({ html, text }) => {
    this.setState({
      descriptionHTML: html,
      descriptionMD: text,
    });
  };
  // save upload file
  handleUpload = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);

      this.setState({
        imageBase64: base64,
      });
    }
  };
  // save state
  handleSave = async () => {
    let res = await saveBlog(this.state);
    if (res && res.errCode === 0) {
      toast.success("add new Blog succeed");
      this.setState({
        name: "",
        title: "",
        descriptionMD: "",
        descriptionHTML: "",
        imageBase64: "",
      });
    } else toast.error("add new Blog failded");
  };

  render() {
    let arrBlogs = this.state;
    return (
      <div className="manage-blog-container">
        <div className="text-center">
          <h2 className="title-manage" style={{ color: "blue" }}>
            Manage Blog
          </h2>
        </div>

        <div className="add-new-Blog row">
          <div className="col-6 form group">
            <lable>Tên Blog</lable>
            <input
              className="form-control"
              value={this.state.name}
              onChange={(event) => this.handleOnChangeInput(event, "name")}
            />
          </div>
          <div className="col-6 form group">
            <lable>Title</lable>
            <input
              className="form-control"
              value={this.state.title}
              onChange={(event) => this.handleOnChangeInput(event, "title")}
            />
          </div>
          <div className="col-6 form group py-2 ">
            <lable>Ảnh blog</lable>
            <input
              className="form-control-file px-2"
              type="file"
              onChange={(event) => this.handleUpload(event)}
            />
          </div>
          <div className="col-12 my-2">
            <MdEditor
              value={this.state.descriptionMD}
              style={{ height: "250px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={this.handleEditorChange}
            />
          </div>
          <div className="col-12 ">
            <button
              className="btn btn--save-Blog btn-primary mx-2 px-2"
              onClick={() => this.handleSave()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogManage);
