import actionTypes from "../actions/actionTypes";
const initialState = {
  isLoggedIn: false,
  adminInfo: null,
  allUser: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_USER_SUCCESS:
      state.allUser = action.allUser;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_FAILDED:
      state.allUser = [];

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
