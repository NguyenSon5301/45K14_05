import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import CommonUtils from "../../utils/CommonUtils";
import "./ProductManage.scss";
import TableManageUser from "./TableManageUser";

class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namePr: "",
      price: "",
      typePr: "",
      countPr: "",
      image: "",
      size: "",
      isOpen: false,
    };
  }

  componentDidMount() {}
  handleUpload = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      this.setState({
        image: base64,
      });
    }
  };

  onChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  checkValidateInput = () => {
    let isValid = true;
    let arrCheck = ["namePr", "price", "typePr", "countPr", " image", "size"];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        alert("Missing required parameter: " + arrCheck[i]);

        break;
      }
    }
    return isValid;
  };

  render() {
    let { namePr, price, typePr, countPr, image, size } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <label
              className="text-center"
              style={{
                "font-size": "25px",
                color: "Blue",
                "text-align": "center",
                margin: "20px 0px",
              }}
            >
              <FormattedMessage id="menu.admin.manage-product" />
            </label>
          </div>

          <div className="col-4">
            <label>
              <FormattedMessage id="Product.title" />
            </label>
            <input
              className="form-control"
              type="text"
              value={namePr}
              onChange={(event) => this.onChangeInput(event, "namePr")}
            />
          </div>
          <div className="col-4 ">
            <label>
              <FormattedMessage id="Product.price" />
            </label>
            <select
              value={price}
              className="form-control"
              onChange={(event) => this.onChangeInput(event, "price")}
            ></select>
          </div>

          <div className="col-4 my-2">
            <label>
              <FormattedMessage id="Product.size" />
            </label>
            <select
              value={size}
              className="form-control"
              onChange={(event) => this.onChangeInput(event, "size")}
            >
              {/* {genderArr &&
                genderArr.length > 0 &&
                genderArr.map((item, index) => {
                  return (
                    <>
                      <option key={index} value={item.keyMap}>
                        {language === LANGUAGES.VI
                          ? item.valueVi
                          : item.valueEn}
                      </option>
                    </>
                  );
                })} */}
            </select>
          </div>
          <div className="col-4 my-2">
            <label>
              <FormattedMessage id="Product.type" />
            </label>
            <select
              value={typePr}
              className="form-control"
              onChange={(event) => this.onChangeInput(event, "typePr")}
            ></select>
          </div>
          <div className="col-3 my-2">
            <label>
              <FormattedMessage id="Product.image" />
            </label>
            <div className="preview-img-container">
              <input
                id="image"
                type="file"
                onChange={(event) => this.handleUpload(event)}
              />
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary px-2">
          Save
        </button>
        <div className="col-12 mb-5">
          <TableManageUser
            handleEditUserFromParent={this.handleEditUserFromParent}
            action={this.state.action}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
