import { handleActions } from "redux-actions";
import { FilterAction } from "../actions";

const initialState = {
  data: [],
  updateReq:"End",
  isLoading: false,
  dataById: {},
};

export const FilterTypeReducer = handleActions(
  {
    [FilterAction.GET_FILTER_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [FilterAction.GET_FILTER_SUCCESS_BY_ID]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);
