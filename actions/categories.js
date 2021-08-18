import { createAction } from "redux-actions";

export const categoriesActions = {
  ADD_CATEGORIE_REQUEST: "ADD CATEGORIES REQUESTED!",
  ADD_CATEGORIE_SUCCESS: "ADD CATEGORIE SUCCESS!",
  ADD_CATEGORIE_FAILED: "ADD CATEGORIE FAILED!",

  GET_CATEGORIE_REQUEST: "GET CATEGORIES REQUESTED!",
  GET_CATEGORIE_SUCCESS: "GET CATEGORIE SUCCESS!",
  GET_CATEGORIE_FAILED: "GET CATEGORIE FAILED!",

  GET_CATEGORIE_REQUEST_BY_ID: "GET CATEGORIES REQUESTED BY ID!",
  GET_CATEGORIE_SUCCESS_BY_ID: "GET CATEGORIE SUCCESS BY ID!",
  GET_CATEGORIE_FAILED_BY_ID: "GET CATEGORIE FAILED BY ID!",

  UPDATE_CATEGORIE_REQUEST: "UPDATE CATEGORIES REQUESTED!",
  UPDATE_CATEGORIE_SUCCESS: "UPDATE CATEGORIE SUCCESS!",
  UPDATE_CATEGORIE_FAILED: "UPDATE CATEGORIE FAILED!",

  
  ADD_BULKCATEGORIE_REQUEST: "ADD BULKCATEGORIES REQUESTED!",
  ADD_BULKCATEGORIE_SUCCESS: "ADD BULKCATEGORIE SUCCESS!",
  ADD_BULKCATEGORIE_FAILED: "ADD BULKCATEGORIE FAILED!",
};

// add categories
export const addCategoriesRequest = createAction(
  categoriesActions.ADD_CATEGORIE_REQUEST
);

export const addCategoriesSuccess = createAction(
  categoriesActions.ADD_CATEGORIE_SUCCESS
);
export const addCategoriesFailed = createAction(
  categoriesActions.ADD_CATEGORIE_FAILED
);

// GET categories

export const getCategoriesRequest = createAction(
  categoriesActions.GET_CATEGORIE_REQUEST
);

export const getCategoriesSuccess = createAction(
  categoriesActions.GET_CATEGORIE_SUCCESS
);
export const getCategoriesFailed = createAction(
  categoriesActions.GET_CATEGORIE_FAILED
);

// GET categories BY ID

export const getCategoriesRequestById = createAction(
  categoriesActions.GET_CATEGORIE_REQUEST_BY_ID
);

export const getCategoriesSuccessById = createAction(
  categoriesActions.GET_CATEGORIE_SUCCESS_BY_ID
);
export const getCategoriesFailedById = createAction(
  categoriesActions.GET_CATEGORIE_FAILED_BY_ID
);

// update categories

export const updateCategoriesRequest = createAction(
  categoriesActions.UPDATE_CATEGORIE_REQUEST
);

export const updateCategoriesSuccess = createAction(
  categoriesActions.UPDATE_CATEGORIE_SUCCESS
);
export const updateCategoriesFailed = createAction(
  categoriesActions.UPDATE_CATEGORIE_FAILED
);

// BULK DATA

export const addBulkCategoriesRequest = createAction(
  categoriesActions.ADD_BULKCATEGORIE_REQUEST
);

export const addBulkCategoriesSuccess = createAction(
  categoriesActions.ADD_BULKCATEGORIE_SUCCESS
);
export const addBulkCategoriesFailed = createAction(
  categoriesActions.ADD_BULKCATEGORIE_FAILED
);