import { handleActions } from "redux-actions";
import { modalActions } from "../actions";

const initialState = {
  addAllergyModalOpen:false,
  editAllergyModalOpen:false,
  addSpiceLevelModalOpen:false,
  editSpiceLevelModalOpen:false,
  editCalorieModalOpen:false,
  addCalorieModalOpen:false,
  bulkCalorieModalOpen:false,
  addFoodTypeModal:false,
  editFoodTypeModal:false,
  BulkFoodTypeModal:false,
  BulkFilterData:false,
};

export const ModalReducer = handleActions(
  {
    [modalActions.MODAL_OPEN_REQUEST]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [modalActions.MODAL_CLOSE_REQUEST]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);
