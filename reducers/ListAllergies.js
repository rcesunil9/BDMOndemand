import { handleActions } from "redux-actions";
import {allergyActions} from "../actions";

const initialState = {
  data:[],
  isLoading:false,
  dataById: {},
};

export const AllergyReducer = handleActions(
  {
    [allergyActions.GET_ALLERGY_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [ allergyActions.GET_ALLERGY_SUCCESS_BY_ID ]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);