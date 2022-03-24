import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  role: [],
  users: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_SUCCESS:
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAILDED:
      return {
        ...state,
      };
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
    default:
      return state;
  }
};

export default adminReducer;
