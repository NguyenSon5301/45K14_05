const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",
  // CHANGE
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
  // fetchAllUSer
  FETCH_ALL_USER_SUCCESS: " FETCH_ALL_USER_SUCCESS",
  FETCH_ALL_USER_FAILDED: " FETCH_ALL_USER_FAILDED",
});

export default actionTypes;
