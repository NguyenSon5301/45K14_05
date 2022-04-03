import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  role: [],
  users: [],
  roleData: [],
  blogData: [],
  isLoggedIn: false,
  userInfo: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    //login
    case actionTypes.ADMIN_LOGIN_SUCCESS:
      console.log("check action", action);
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
    default:
      return state;
  }
};

export default adminReducer;
