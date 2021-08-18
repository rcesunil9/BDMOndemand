import { handleActions } from "redux-actions";
import { foodTypeActions } from "../actions";

const initialState = {
  data: [],
  isLoading: false,
  dataById: {},
};

export const FoodTypeReducer = handleActions(
  {
    [foodTypeActions.GET_FOODTYPE_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [foodTypeActions.GET_FOODTYPE_SUCCESS_BY_ID]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);
