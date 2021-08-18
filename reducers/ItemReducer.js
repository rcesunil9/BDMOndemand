import { handleActions } from "redux-actions";
import {ListItemsActions} from "../actions";

const initialState = {
  data:[],
  isLoading:false,
  dataById: {},
};

export const ItemsReducer = handleActions(
  {
    [ListItemsActions.GET_LISTITEMS_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [ListItemsActions.GET_LISTITEMS_SUCCESS_BY_ID ]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);