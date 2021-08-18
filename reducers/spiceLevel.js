
import { handleActions } from "redux-actions";
import {spiceLevelActions} from "../actions";

const initialState = {
  data:[],
  isLoading:false,
  dataById: {},
};

export const SpiceLevelReducer = handleActions(
  {
    [spiceLevelActions.GET_SPICELEVEL_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [spiceLevelActions.GET_SPICELEVEL_SUCCESS_BY_ID ]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);