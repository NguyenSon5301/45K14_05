import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  role: [],
  users: [],
  roleData: [],
  blogData: [],
  isLoggedIn: false,
  userInfo: null,
  products: [],
  arrPrices: [],
  arrType: [],
  sumCount: 0,
  cartAr: [],
  numberCart: 0,
  Carts: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    //login
    case actionTypes.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.userInfo,
      };
    case actionTypes.ADMIN_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    //log out
    case actionTypes.PROCESS_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    //fetch all user
    case actionTypes.FETCH_ALL_USER_SUCCESS:
      state.users = action.users;

      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_FAILDED:
      state.users = [];
      return {
        ...state,
      };
    //get gender
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.dataGender;

      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAILDED:
      state.genders = [];
      return {
        ...state,
      };
    //get role
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roleData = action.roleData;

      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAILDED:
      state.roleData = [];
      return {
        ...state,
      };
    // fetch all blogs
    case actionTypes.FETCH_ALL_BLOGS_SUCCEED:
      state.blogData = action.blogData;

      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_BLOGS_FAILDED:
      state.blogData = [];
      return {
        ...state,
      };
    //fetch all product
    case actionTypes.FETCH_ALL_PRODUCT_SUCCEED:
      state.products = action.products;

      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_PRODUCT_FAILDED:
      state.products = [];
      return {
        ...state,
      };
    // fetch all price product
    case actionTypes.FETCH_ALL_PRICE_SUCCEED:
      state.arrPrices = action.arrPrices;

      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_PRICE_FAILDED:
      state.arrPrices = [];
      return {
        ...state,
      };
    // fetch all type product
    case actionTypes.FETCH_ALL_TYPE_SUCCEED:
      state.arrType = action.arrType;

      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_TYPE_FAILDED:
      state.arrType = [];
      return {
        ...state,
      };

    case actionTypes.GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.GET_NUMBER_CART:
      return {
        ...state,
      };
    case actionTypes.ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.namePR,
          image: action.payload.image,
          price: action.payload.priceData,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });

        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.namePR,
            image: action.payload.image,
            price: action.payload.priceData,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case actionTypes.INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[action.payload].quantity++;

      return {
        ...state,
      };
    case actionTypes.DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }

      return {
        ...state,
      };
    case actionTypes.DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id != state.Carts[action.payload].id;
        }),
      };
    default:
      return state;
  }
};

export default adminReducer;
