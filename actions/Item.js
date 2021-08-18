import { createAction } from "redux-actions";

export const ListItemsActions = {
  ADD_LISTITEMS_REQUEST: "ADD LISTITEMSS REQUESTED!",
  ADD_LISTITEMS_SUCCESS: "ADD LISTITEMS SUCCESS!",
  ADD_LISTITEMS_FAILED: "ADD LISTITEMS FAILED!",

  GET_LISTITEMS_REQUEST: "GET LISTITEMSS REQUESTED!",
  GET_LISTITEMS_SUCCESS: "GET LISTITEMS SUCCESS!",
  GET_LISTITEMS_FAILED: "GET LISTITEMS FAILED!",

  GET_LISTITEMS_REQUEST_BY_ID: "GET LISTITEMSS REQUESTED BY ID!",
  GET_LISTITEMS_SUCCESS_BY_ID: "GET LISTITEMS SUCCESS BY ID!",
  GET_LISTITEMS_FAILED_BY_ID: "GET LISTITEMS FAILED BY ID!",

  UPDATE_LISTITEMS_REQUEST: "UPDATE LISTITEMSS REQUESTED!",
  UPDATE_LISTITEMS_SUCCESS: "UPDATE LISTITEMS SUCCESS!",
  UPDATE_LISTITEMS_FAILED: "UPDATE LISTITEMS FAILED!",

  
  ADD_BULKLISTITEMS_REQUEST: "ADD BULKLISTITEMSS REQUESTED!",
  ADD_BULKLISTITEMS_SUCCESS: "ADD BULKLISTITEMS SUCCESS!",
  ADD_BULKLISTITEMS_FAILED: "ADD BULKLISTITEMS FAILED!",
};

// add LISTITEMSs
export const addListItemsRequest = createAction(
  ListItemsActions.ADD_LISTITEMS_REQUEST
);

export const addListItemsSuccess = createAction(
  ListItemsActions.ADD_LISTITEMS_SUCCESS
);
export const addListItemsFailed = createAction(
  ListItemsActions.ADD_LISTITEMS_FAILED
);

// GET LISTITEMSs

export const getListItemsRequest = createAction(
  ListItemsActions.GET_LISTITEMS_REQUEST
);

export const getListItemsSuccess = createAction(
  ListItemsActions.GET_LISTITEMS_SUCCESS
);
export const getListItemsFailed = createAction(
  ListItemsActions.GET_LISTITEMS_FAILED
);

// GET LISTITEMSs BY ID

export const getListItemsRequestById = createAction(
  ListItemsActions.GET_LISTITEMS_REQUEST_BY_ID
);

export const getListItemsSuccessById = createAction(
  ListItemsActions.GET_LISTITEMS_SUCCESS_BY_ID
);
export const getListItemsFailedById = createAction(
  ListItemsActions.GET_LISTITEMS_FAILED_BY_ID
);

// update ListItems

export const updateListItemsRequest = createAction(
  ListItemsActions.UPDATE_LISTITEMS_REQUEST
);

export const updateListItemsSuccess = createAction(
  ListItemsActions.UPDATE_LISTITEMS_SUCCESS
);
export const updateListItemsFailed = createAction(
  ListItemsActions.UPDATE_LISTITEMS_FAILED
);

// BULK DATA

export const addBulkListItemsRequest = createAction(
  ListItemsActions.ADD_BULKLISTITEMS_REQUEST
);

export const addBulkListItemsSuccess = createAction(
  ListItemsActions.ADD_BULKLISTITEMS_SUCCESS
);
export const addBulkListItemsFailed = createAction(
  ListItemsActions.ADD_BULKLISTITEMS_FAILED
);