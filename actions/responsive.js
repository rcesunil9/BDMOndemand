import { createAction } from "redux-actions";

export const responsiveActions = {
  SIDEBAR_RESPONSIVE_SUCCESS: "Sidebar responsive success!",
};

export const sideBarResponsive = createAction(
  responsiveActions.SIDEBAR_RESPONSIVE_SUCCESS
);
