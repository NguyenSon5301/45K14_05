import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils/constant";
import "../../More/styles/main_styles.css";
import HeaderBefore from "../HomePage/HeaderBefore";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import FooterPage from "../Footer/FooterPage";
import NewLetter from "../NewLetter/NewLetter";

import React from "react";
import { buyProductOrder } from "../../services/userService";
import { connect } from "react-redux";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../../store/actions";

function Cart({
  items,
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
  language,
  isLoggedIn,
  userInfo,
}) {
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart +=
      language === LANGUAGE.VI
        ? items.Carts[item].quantity * items.Carts[item].price.valueVi
        : items.Carts[item].quantity * items.Carts[item].price.valueEn;
    ListCart.push(items.Carts[item]);
  });
  let TotalPrice = (price, tonggia) => {
    return language === LANGUAGE.EN
      ? Number(price * tonggia).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
      : Number(price * tonggia).toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        });
  };
  let handlePay = async () => {
    console.log("ListCart", ListCart);
    console.log("total", TotalCart);

    if (userInfo) {
      let object = {};
      object = userInfo.id;

      ListCart = ListCart.push(object);
      await buyProductOrder({
        userId: userInfo.id,
        ListCart,
        sumPR: TotalCart,
      });
    }
  };
  return (
    <>
      {isLoggedIn ? <HeaderHomePage /> : <HeaderBefore />}
      <div style={{ "margin-top": "160px" }}>
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {ListCart.map((item, key) => {
                let imageBase64 = "";
                if (item.image) {
                  imageBase64 = new Buffer(item.image, "base64").toString(
                    "binary"
                  );
                }
                return (
                  <tr key={key}>
                    <td>
                      <i
                        className="badge badge-danger"
                        onClick={() => DeleteCart(key)}
                      >
                        X
                      </i>
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={imageBase64}
                        style={{ width: "100px", height: "80px" }}
                      />
                    </td>
                    <td>
                      {language === LANGUAGE.EN
                        ? item.price.valueEn
                        : item.price.valueVi}
                      <span> {language === LANGUAGE.EN ? "$" : "VND"}</span>
                    </td>
                    <td>
                      <span
                        className="btn btn-primary px-4"
                        style={{ margin: "2px" }}
                        onClick={() => DecreaseQuantity(key)}
                      >
                        -
                      </span>
                      <span className="btn btn-light px-4">
                        {item.quantity}
                      </span>
                      <button
                        className="btn btn-primary px-4"
                        style={{ margin: "2px" }}
                        onClick={() => IncreaseQuantity(key)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      {language === LANGUAGE.EN
                        ? TotalPrice(item.price.valueEn, item.quantity)
                        : TotalPrice(item.price.valueVi, item.quantity)}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger px-3"
                        style={{ float: "center" }}
                        onClick={() => DeleteCart(key)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="5">Total Carts</td>
                <td>
                  {language === LANGUAGE.EN
                    ? Number(TotalCart).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                    : Number(TotalCart).toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="btn btn-primary"
            style={{ "margin-left": "60px", padding: "0px 15px" }}
            onClick={() => handlePay()}
          >
            Thanh Toán
          </button>
        </div>
      </div>
      <NewLetter />
      <FooterPage />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.admin,
    language: state.app.language,
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Cart);
