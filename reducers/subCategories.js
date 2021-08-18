import { handleActions } from "redux-actions";
import {subCategoriesActions } from "../actions";

const initialState = {
  data:[],
  isLoading:false,
  dataById: {},
};

export const SubCategorieReducer = handleActions(
  {
    [subCategoriesActions.GET_SUBCATEGORIE_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    
    [subCategoriesActions.GET_SUBCATEGORIE_SUCCESS_BY_ID]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);