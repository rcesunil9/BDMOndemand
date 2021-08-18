import { handleActions } from "redux-actions";
import { responsiveActions } from "../actions";

const initialState = {
  sidebarShow: "responsive",
};

export const ResponsiveReducer = handleActions(
  {
    [responsiveActions.SIDEBAR_RESPONSIVE_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);
