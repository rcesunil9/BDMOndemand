import { createAction } from "redux-actions";

export const spiceLevelActions = {

  ADD_SPICELEVEL_REQUEST: "ADD SPICELEVEL REQUESTED!",
  ADD_SPICELEVEL_SUCCESS: "ADD SPICELEVEL SUCCESS!",
  ADD_SPICELEVEL_FAILED: "ADD SPICELEVEL FAILED!",

  GET_SPICELEVEL_REQUEST: "GET SPICELEVEL REQUESTED!",
  GET_SPICELEVEL_SUCCESS: "GET SPICELEVEL SUCCESS!",
  GET_SPICELEVEL_FAILED: "GET SPICELEVEL FAILED!",

  GET_SPICELEVEL_REQUEST_BY_ID: "GET SPICELEVEL REQUESTED BY ID!",
  GET_SPICELEVEL_SUCCESS_BY_ID: "GET SPICELEVEL SUCCESS BY ID!",
  GET_SPICELEVEL_FAILED_BY_ID: "GET SPICELEVEL FAILED BY ID!",

  UPDATE_SPICELEVEL_REQUEST: "UPDATE SPICELEVEL REQUESTED!",
  UPDATE_SPICELEVEL_SUCCESS: "UPDATE SPICELEVEL SUCCESS!",
  UPDATE_SPICELEVEL_FAILED: "UPDATE SPICELEVEL FAILED!",
};

// add SPICELEVELs
export const addSpiceLevelRequest = createAction(
  spiceLevelActions.ADD_SPICELEVEL_REQUEST
);

export const addSpiceLevelSuccess = createAction(
  spiceLevelActions.ADD_SPICELEVEL_SUCCESS
);
export const addSpiceLevelFailed = createAction(
  spiceLevelActions.ADD_SPICELEVEL_FAILED
);

// GET SpiceLevel

export const getSpiceLevelRequest = createAction(
  spiceLevelActions.GET_SPICELEVEL_REQUEST
);

export const getSpiceLevelSuccess = createAction(
  spiceLevelActions.GET_SPICELEVEL_SUCCESS
);
export const getSpiceLevelFailed = createAction(
  spiceLevelActions.GET_SPICELEVEL_FAILED
);

// get SpiceLevel By ID
export const getSpiceLevelRequestById = createAction(
  spiceLevelActions.GET_SPICELEVEL_REQUEST_BY_ID
);

export const getSpiceLevelSuccessById = createAction(
  spiceLevelActions.GET_SPICELEVEL_SUCCESS_BY_ID
);
export const getSpiceLevelFailedById = createAction(
  spiceLevelActions.GET_SPICELEVEL_FAILED_BY_ID
);

// update SpiceLevel

export const updateSpiceLevelRequest = createAction(
  spiceLevelActions.UPDATE_SPICELEVEL_REQUEST
);

export const updateSLevelSuccess = createAction(
  spiceLevelActions.UPDATE_SPICELEVEL_SUCCESS
);
export const updateSpiceLevelFailed = createAction(
  spiceLevelActions.UPDATE_SPICELEVEL_FAILED
);
