import { toast } from "react-toastify";
import { createLogic } from "redux-logic";
import { ApiHelper } from "../Helpers/ApiHelper";
import { logger } from "../Helpers/Logger";
import { DefaultErrorMessage } from "../config/Constants";
import {
  showLoader,
  hideLoader,
  allergyActions,
  getAllergyRequest,
  getAllergySuccess,
  getAllergySuccessById,
  modalCloseRequest,
} from "../actions";
let toastId = null;

/**
 *  CRUD Categories
 */
const addAllergyLogic = createLogic({
  type: allergyActions.ADD_ALLERGY_REQUEST,
  cancelType: allergyActions.ADD_ALLERGY_FAILED,
  async process({ action }, dispatch, done) {
    dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/allergy",
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
      toastId = toast.success("Add Allergy Success!");
      dispatch(getAllergyRequest());
      dispatch(modalCloseRequest({ addAllergyModalOpen: false }));
      dispatch(hideLoader());
      done();
    }
  },
});

// getList
const getAllergyLogic = createLogic({
  type: allergyActions.GET_ALLERGY_REQUEST,
  cancelType: allergyActions.GET_ALLERGY_FAILED,
  async process({ action }, dispatch, done) {
    dispatch(getAllergySuccess({ isLoading: true }));
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/allergy",
      "GET",
      true,
      undefined,
      undefined
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      dispatch(getAllergySuccess({ isLoading: false }));
      done();
      return;
    } else {
      logger(result);
      dispatch(getAllergySuccess({ data: result.data, isLoading: false }));
      done();
      return;
    }
  },
});

// get data by id

const getAllergyByIdLogic = createLogic({
  type: allergyActions.GET_ALLERGY_REQUEST_BY_ID,
  cancelType: allergyActions.GET_ALLERGY_FAILED_BY_ID,
  async process({ action }, dispatch, done) {
    dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      ["/allergy/" + action.payload.allergy_id],
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
      dispatch(getAllergySuccessById({ dataById: result.data }));
      dispatch(hideLoader());
      done();
      return;
    }
  },
});

// update

const updateAllergyLogic = createLogic({
  type: allergyActions.UPDATE_ALLERGY_REQUEST,
  cancelType: allergyActions.UPDATE_ALLERGY_FAILED,
  async process({ action }, dispatch, done) {
    dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      ["/allergy/" + action.payload.allergy_id],
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
      toastId = toast.success("Updated Category Success!");
      dispatch(modalCloseRequest({ editAllergyModalOpen: false }));
      dispatch(getAllergyRequest());
      dispatch(hideLoader());
      done();
      return;
    }
  },
});

export const AllerryLogic = [
  addAllergyLogic,
  getAllergyLogic,
  updateAllergyLogic,
  getAllergyByIdLogic,
];
