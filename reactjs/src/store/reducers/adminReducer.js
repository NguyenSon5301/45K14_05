import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  role: [],
  users: [],
  dataUserRequire: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.FETCH_GENDER_ROLE_DATA_SUCCESS:
      state.dataUserRequire = action.dataUserRequire;

      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_ROLE_DATA_FAILDED:
      state.dataUserRequire = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
