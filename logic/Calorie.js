import { toast } from "react-toastify";
import { createLogic } from "redux-logic";
import { ApiHelper } from "../Helpers/ApiHelper";
import { logger } from "../Helpers/Logger";
import { DefaultErrorMessage } from "../config/Constants";
import {
  showLoader,
  hideLoader,
  calorieActions,
  getCalorieRequest,
  getCalorieSuccess,
  modalCloseRequest,
  getCalorieSuccessById
} from "../actions";
let toastId = null;

/**
 *  CRUD Categories
 */
const addCalorieLogic = createLogic({
  type: calorieActions.ADD_CALORIE_REQUEST,
  cancelType: calorieActions.ADD_CALORIE_FAILED,
  async process({ action }, dispatch, done) {
    dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/calorie",
      "POST",
      true,
      undefined,
      action.payload
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      dispatch(hideLoader());
      done();
      return;
    } else {
      logger(result);
      toastId = toast.success("Add Calorie Success!");
      dispatch(getCalorieRequest());
      dispatch(modalCloseRequest({ addCalorieModalOpen: false }));
      dispatch(hideLoader());
      done();
    }
  },
});

// add bulk 
const addBulkCalorieLogic = createLogic({
    type: calorieActions.ADD_BULKCALORIE_REQUEST,
    cancelType: calorieActions.ADD_BULKCALORIE_FAILED,
    async process({ action }, dispatch, done) {
      dispatch(showLoader());
      let api = new ApiHelper();
      let result = await api.FetchFromServer(
        "",
        "/calorie",
        "POST",
        true,
        undefined,
        action.payload
      );
      if (result.isError) {
        if (!toast.isActive(toastId)) {
          toastId = toast.error(result.messages[0] || DefaultErrorMessage);
        }
        dispatch(hideLoader());
        done();
        return;
      } else {
        logger(result);
        toastId = toast.success("Add Bulk Success!");
        dispatch(getCalorieRequest());
        dispatch(modalCloseRequest({ bulkCalorieModalOpen: false }));
        dispatch(hideLoader());
        done();
      }
    },
  });

// getList
const getCalorieLogic = createLogic({
  type: calorieActions.GET_CALORIE_REQUEST,
  cancelType: calorieActions.GET_CALORIE_FAILED,
  async process({ action }, dispatch, done) {
    dispatch(getCalorieSuccess({ isLoading: true }));
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/calorie",
      "GET",
      true,
      undefined,
      undefined
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      dispatch(getCalorieSuccess({ isLoading: false }));
      done();
      return;
    } else {
      logger(result);
      dispatch(getCalorieSuccess({ data: result.data, isLoading: false }));
      done();
      return;
    }
  },
});

// get data by id

const getCalorieByIdLogic = createLogic({
  type: calorieActions.GET_CALORIE_REQUEST_BY_ID,
  cancelType: calorieActions.GET_CALORIE_FAILED_BY_ID,
  async process({ action }, dispatch, done) {
    console.log("action",action.payload)
    dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      ["/calorie/" + action.payload.calorie_id],
      "GET",
      true,
      undefined,
      undefined
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      dispatch(hideLoader());
      done();
      return;
    } else {
      logger(result);
      dispatch(getCalorieSuccessById({ dataById: result.data }));
      dispatch(hideLoader());
      done();
      return;
    }
  },
});

// update

const updateCalorieLogic = createLogic({
  type: calorieActions.UPDATE_CALORIE_REQUEST,
  cancelType: calorieActions.UPDATE_CALORIE_FAILED,
  async process({ action }, dispatch, done) {
    dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      ["/calorie/" + action.payload.calorie_id],
      "PUT",
      true,
      undefined,
      action.payload
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      dispatch(hideLoader());
      done();
      return;
    } else {
      logger(result);
      toastId = toast.success("Updated Calorie Success!");
      dispatch(modalCloseRequest({ editCalorieModalOpen: false }));
      dispatch(getCalorieRequest());
      dispatch(hideLoader());
      done();
      return;
    }
  },
});

export const CalorieLogic = [
  addCalorieLogic,
  getCalorieLogic,
  updateCalorieLogic,
  getCalorieByIdLogic,
  addBulkCalorieLogic,
];
