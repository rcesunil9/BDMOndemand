import { handleActions } from "redux-actions";
import { authActions } from "../actions";

const initialState = {
  token: null,
  isLoginSuccess:false
};

export const AuthReducer = handleActions(
  {
    [authActions.LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);