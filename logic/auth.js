import { toast } from "react-toastify";
import { createLogic } from "redux-logic";
import { ApiHelper } from "../Helpers/ApiHelper";
import { logger } from "../Helpers/Logger";
import { DefaultErrorMessage } from "../config/Constants";
import { AppRoutes } from "../config/AppRoutes";
import { authActions, loginSuccess, showLoader, hideLoader } from "../actions";
let toastId = null;

/**
 *  Login
 */
const loginLogic = createLogic({
  type: authActions.LOGIN_REQUEST,
  cancelType: authActions.LOGIN_FAILED,
  async process({ action }, dispatch, done) {
    dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/sign-in",
      "POST",
      false,
      undefined,
      action.payload
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      dispatch(hideLoader());
      done();
      return;
    } else {
      logger(result);
      localStorage.setItem("token", result.data.token);
      dispatch(
        loginSuccess({ token: result.data.token, isLoginSuccess: true })
      );
      dispatch(hideLoader());
      done();
    }
  },
});

export const AuthLogic = [loginLogic];
