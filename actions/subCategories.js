import { createAction } from "redux-actions";

export const subCategoriesActions = {
  ADD_SUBCATEGORIE_REQUEST: "ADD SUBCATEGORIES REQUESTED!",
  ADD_SUBCATEGORIE_SUCCESS: "ADD SUBCATEGORIE SUCCESS!",
  ADD_SUBCATEGORIE_FAILED: "ADD SUBCATEGORIE FAILED!",

  GET_SUBCATEGORIE_REQUEST: "GET SUBCATEGORIES REQUESTED!",
  GET_SUBCATEGORIE_SUCCESS: "GET SUBCATEGORIE SUCCESS!",
  GET_SUBCATEGORIE_FAILED: "GET SUBCATEGORIE FAILED!",

  GET_SUBCATEGORIE_REQUEST_BY_ID: "GET SUBCATEGORIES REQUESTED BY ID!",
  GET_SUBCATEGORIE_SUCCESS_BY_ID: "GET SUBCATEGORIE SUCCESS BY ID!",
  GET_SUBCATEGORIE_FAILED_BY_ID: "GET SUBCATEGORIE FAILED BY ID!",

  UPDATE_SUBCATEGORIE_REQUEST: "UPDATE SUBCATEGORIES REQUESTED!",
  UPDATE_SUBCATEGORIE_SUCCESS: "UPDATE SUBCATEGORIE SUCCESS!",
  UPDATE_SUBCATEGORIE_FAILED: "UPDATE SUBCATEGORIE FAILED!",
};

// add SUBCATEGORIEs
export const addSubCategoriesRequest = createAction(
  subCategoriesActions.ADD_SUBCATEGORIE_REQUEST
);

export const addSubCategoriesSuccess = createAction(
  subCategoriesActions.ADD_SUBCATEGORIE_SUCCESS
);
export const addSubCategoriesFailed = createAction(
  subCategoriesActions.ADD_SUBCATEGORIE_FAILED
);

// GET categories

export const getSubCategoriesRequest = createAction(
  subCategoriesActions.GET_SUBCATEGORIE_REQUEST
);

export const getSubCategoriesSuccess = createAction(
  subCategoriesActions.GET_SUBCATEGORIE_SUCCESS
);
export const getSubCategoriesFailed = createAction(
  subCategoriesActions.GET_SUBCATEGORIE_FAILED
);

// GET categories by iD
export const getSubCategoriesRequestById = createAction(
  subCategoriesActions.GET_SUBCATEGORIE_REQUEST_BY_ID
);

export const getSubCategoriesSuccessById = createAction(
  subCategoriesActions.GET_SUBCATEGORIE_SUCCESS_BY_ID
);
export const getSubCategoriesFailedById = createAction(
  subCategoriesActions.GET_SUBCATEGORIE_FAILED_BY_ID
);

// update categories

export const updateSubCategoriesRequest = createAction(
  subCategoriesActions.UPDATE_SUBCATEGORIE_REQUEST
);

export const updateSubCategoriesSuccess = createAction(
  subCategoriesActions.UPDATE_SUBCATEGORIE_SUCCESS
);
export const updateSubCategoriesFailed = createAction(
  subCategoriesActions.UPDATE_SUBCATEGORIE_FAILED
);
