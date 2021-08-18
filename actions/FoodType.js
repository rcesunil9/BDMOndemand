import { createAction } from "redux-actions";

export const foodTypeActions = {
  ADD_FOODTYPE_REQUEST: "ADD FOODTYPES REQUESTED!",
  ADD_FOODTYPE_SUCCESS: "ADD FOODTYPE SUCCESS!",
  ADD_FOODTYPE_FAILED: "ADD FOODTYPE FAILED!",

  GET_FOODTYPE_REQUEST: "GET FOODTYPES REQUESTED!",
  GET_FOODTYPE_SUCCESS: "GET FOODTYPE SUCCESS!",
  GET_FOODTYPE_FAILED: "GET FOODTYPE FAILED!",

  GET_FOODTYPE_REQUEST_BY_ID: "GET FOODTYPES REQUESTED BY ID!",
  GET_FOODTYPE_SUCCESS_BY_ID: "GET FOODTYPE SUCCESS BY ID!",
  GET_FOODTYPE_FAILED_BY_ID: "GET FOODTYPE FAILED BY ID!",

  UPDATE_FOODTYPE_REQUEST: "UPDATE FOODTYPES REQUESTED!",
  UPDATE_FOODTYPE_SUCCESS: "UPDATE FOODTYPE SUCCESS!",
  UPDATE_FOODTYPE_FAILED: "UPDATE FOODTYPE FAILED!",

  
  ADD_BULKFOODTYPE_REQUEST: "ADD BULKFOODTYPES REQUESTED!",
  ADD_BULKFOODTYPE_SUCCESS: "ADD BULKFOODTYPE SUCCESS!",
  ADD_BULKFOODTYPE_FAILED: "ADD BULKFOODTYPE FAILED!",
};

// add FOODTYPEs
export const addFoodTypesRequest = createAction(
  foodTypeActions.ADD_FOODTYPE_REQUEST
);

export const addFoodTypesSuccess = createAction(
  foodTypeActions.ADD_FOODTYPE_SUCCESS
);
export const addFoodTypesFailed = createAction(
  foodTypeActions.ADD_FOODTYPE_FAILED
);

// GET FoodTypes

export const getFoodTypesRequest = createAction(
  foodTypeActions.GET_FOODTYPE_REQUEST
);

export const getFoodTypesSuccess = createAction(
  foodTypeActions.GET_FOODTYPE_SUCCESS
);
export const getFoodTypesFailed = createAction(
  foodTypeActions.GET_FOODTYPE_FAILED
);

// GET FOODTYPEs BY ID

export const getFoodTypesRequestById = createAction(
  foodTypeActions.GET_FOODTYPE_REQUEST_BY_ID
);

export const getFoodTypesSuccessById = createAction(
  foodTypeActions.GET_FOODTYPE_SUCCESS_BY_ID
);
export const getFoodTypesFailedById = createAction(
  foodTypeActions.GET_FOODTYPE_FAILED_BY_ID
);

// update FOODTYPEs

export const updateFoodTypesRequest = createAction(
  foodTypeActions.UPDATE_FOODTYPE_REQUEST
);

export const updateFoodTypesSuccess = createAction(
  foodTypeActions.UPDATE_FOODTYPE_SUCCESS
);
export const updateFoodTypesFailed = createAction(
  foodTypeActions.UPDATE_FOODTYPE_FAILED
);

// BULK DATA

export const addBulkFoodTypesRequest = createAction(
  foodTypeActions.ADD_BULKFOODTYPE_REQUEST
);

export const addBulkFoodTypesSuccess = createAction(
  foodTypeActions.ADD_BULKFOODTYPE_SUCCESS
);
export const addBulkFoodTypesFailed = createAction(
  foodTypeActions.ADD_BULKFOODTYPE_FAILED
);