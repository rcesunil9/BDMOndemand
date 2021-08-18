import { handleActions } from "redux-actions";
import {calorieActions} from "../actions";

const initialState = {
  data: [],
  isLoading: false,
  dataById: {},
};

export const CaloriesReducer = handleActions(
  {
    [calorieActions.GET_CALORIE_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [calorieActions.GET_CALORIE_SUCCESS_BY_ID]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);
