import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import CommonUtils from "../../utils/CommonUtils";
import "./ProductManage.scss";
import { LANGUAGE } from "../../utils/constant";
import { emitter } from "../../utils/emitter";

import * as actions from "../../store/actions";
import {
  createNewProduct,
  deletePr,
  editProduct,
} from "../../services/userService";
import { toast } from "react-toastify";
import ModalEditProduct from "./ModalEditProduct";
class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namePr: "",
      price: "",
      typePr: "",
      description: "",
      image: "",
      size: "",
      arrProducts: [],
      arrType: [],
      arrPrice: [],
      isOpenModalEdit: false,
      productEdit: {},
    };
    this.listenToEmitter();
  }
  listenToEmitter() {
    emitter.on("EVENT_CLEAR_DATA_MODAL_CREATE", () => {
      this.setState({
        namePr: "",
        price: "",
        typePr: "",
        description: "",
        image: "",
        size: "",
      });
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.products !== this.props.products) {
      let { products } = this.props;
      this.setState({
        arrProducts: products,
      });
    }
    if (prevProps.arrPrices !== this.props.arrPrices) {
      let { arrPrices } = this.props;
      this.setState({
        arrPrice: arrPrices,
        price: arrPrices && arrPrices.length > 0 ? arrPrices[0].keyMap : "",
      });
    }
    if (prevProps.arrType !== this.props.arrType) {
      let { arrType } = this.props;
      this.setState({
        arrType: arrType,
        typePr: arrType && arrType.length > 0 ? arrType[0].keyMap : "",
      });
    }
  }
  async componentDidMount() {
    await this.props.fetchAllProduct();
    await this.props.fetchAllPricePr();
    await this.props.fetchAllTypePr();
  }
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
    let arrCheck = [
      "namePr",
      "price",
      "typePr",
      "description",
      "image",
      "size",
    ];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        alert("Missing required parameter: " + arrCheck[i]);
        isValid = false;
        break;
      }
    }
    return isValid;
  };
  // create new product
  handleCreateNewPr = async () => {
    let isValid = this.checkValidateInput();
    if (isValid === false) return;
    if (isValid === true) {
      let res = await createNewProduct({
        namePr: this.state.namePr,
        size: this.state.size,
        typePr: this.state.typePr,
        price: this.state.price,
        image: this.state.image,
        description: this.state.description,
      });
      if (res && res.errCode === 0) {
        emitter.emit("EVENT_CLEAR_DATA_MODAL_CREATE");
        await this.props.fetchAllProduct();
      }
      if (res && res.errCode === 1) {
        toast.error(res.errMessage);
      }
    }
  };
  // delete product
  onDelete = async (id) => {
    let res = await deletePr(id);
    if (res && res.errCode === 0) {
      toast.success("Delete product succeed");
      await this.props.fetchAllProduct();
    }
  };
  onEdit = async (product) => {
    this.setState({
      isOpenModalEdit: true,
      productEdit: product,
    });
  };
  toogleEditProduct = () => {
    this.setState({
      isOpenModalEdit: !this.state.isOpenModalEdit,
    });
  };
  DoEditProduct = async (product) => {
    try {
      let res = await editProduct(product);

      if (res && res.errCode === 0) {
        this.setState({
          isOpenModalEdit: false,
        });
        await this.props.fetchAllProduct();
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    let {
      namePr,
      price,
      typePr,
      size,
      description,
      arrProducts,
      arrType,
      arrPrice,
    } = this.state;
    let { language } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <label
              className="text-center"
              style={{
                fontSize: "25px",
                color: "Blue",
                textAlign: "center",
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
          <div className="col-4">
            <label>
              <FormattedMessage id="Product.description" />
            </label>
            <input
              className="form-control"
              type="text"
              value={description}
              onChange={(event) => this.onChangeInput(event, "description")}
            />
          </div>
          <div className="col-4 ">
            <label>
              <FormattedMessage id="Product.price" />
            </label>
            <select
              value={price}
              className="form-select"
              onChange={(event) => this.onChangeInput(event, "price")}
            >
              {arrPrice &&
                arrPrice.length > 0 &&
                arrPrice.map((item, index) => {
                  return (
                    <option key="{index}" value={item.keyMap}>
                      {language === LANGUAGE.VI ? item.valueVi : item.valueEn}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="col-4 ">
            <label>
              <FormattedMessage id="Product.size" />
            </label>
            <input
              className="form-control"
              type="text"
              value={size}
              onChange={(event) => this.onChangeInput(event, "size")}
            />
          </div>
          <div className="col-4 my-2">
            <label>
              <FormattedMessage id="Product.type" />
            </label>
            <select
              value={typePr}
              className="form-select"
              onChange={(event) => this.onChangeInput(event, "typePr")}
            >
              {arrType &&
                arrType.length > 0 &&
                arrType.map((item, index) => {
                  return (
                    <option key="{index}" value={item.keyMap}>
                      {language === LANGUAGE.VI ? item.valueVi : item.valueEn}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="col-3 my-2">
            <label>
              <FormattedMessage id="Product.image" />
            </label>
            <div className="preview-img-container">
              <input
                type="file"
                onChange={(event) => {
                  this.handleUpload(event, "image");
                }}
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary px-2"
          onClick={() => this.handleCreateNewPr()}
        >
          Create
        </button>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Size</th>
                <th>Type</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {arrProducts &&
                arrProducts.length > 0 &&
                arrProducts.map((item, index) => {
                  return (
                    <tr key="{index}">
                      <td>{item.namePR}</td>
                      <td>{item.description}</td>
                      <td>{item.sizeId}</td>

                      <td>
                        {language === LANGUAGE.VI
                          ? item.typeData.valueVi
                          : item.typeData.valueEn}
                      </td>
                      <td>
                        {language === LANGUAGE.VI
                          ? item.priceData.valueVi
                          : item.priceData.valueEn}
                      </td>
                      <td className="button-sub">
                        <button
                          className="btn btn-primary mx-2"
                          onClick={() => this.onEdit(item)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-warning"
                          onClick={() => this.onDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {this.state.isOpenModalEdit && (
          <ModalEditProduct
            isOpen={this.state.isOpenModalEdit}
            toogleEditProduct={this.toogleEditProduct}
            currentProduct={this.state.productEdit}
            editProduct={this.DoEditProduct}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.admin.products,
    arrPrices: state.admin.arrPrices,
    arrType: state.admin.arrType,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProduct: () => dispatch(actions.fetchAllProduct()),
    fetchAllPricePr: () => dispatch(actions.fetchAllPricePr()),
    fetchAllTypePr: () => dispatch(actions.fetchAllTypePr()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
