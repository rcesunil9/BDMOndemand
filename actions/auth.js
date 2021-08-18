import { createAction } from "redux-actions";

export const authActions = {
  LOGIN_REQUEST: "Login Requested!",
  LOGIN_FAILED: "Login Failed!",
  LOGIN_SUCCESS: "Login Success!",
  LOGOUT_REQUEST: "Logout Requested!",
  LOGOUT_FAILED: "Logout Failed!",
  LOGOUT_SUCCESS: "Logout Success!",
};

export const loginRequest = createAction(authActions.LOGIN_REQUEST);
export const loginFailed = createAction(authActions.LOGIN_FAILED);
export const loginSuccess = createAction(authActions.LOGIN_SUCCESS);

export const logOutRequest = createAction(authActions.LOGOUT_REQUEST);
export const logOutFailed = createAction(authActions.LOGOUT_FAILED);
export const logOutSuccess = createAction(authActions.LOGOUT_SUCCESS);
