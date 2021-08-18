import { toast } from "react-toastify";
import { createLogic } from "redux-logic";
import { ApiHelper } from "../Helpers/ApiHelper";
import { logger } from "../Helpers/Logger";
import { DefaultErrorMessage } from "../config/Constants";
import {
  showLoader,
  hideLoader,
  modalCloseRequest,
  addFilterTypeRequest,
  FilterAction,
  getFilterTypeRequest,
  getFilterTypeSuccess,
  addFilterDataRequest,
  updateFilterRequest,
} from "../actions";
let toastId = null;

/**
 *  CRUD Categories
 */
const addFilterTypeLogic = createLogic({
  type: FilterAction.ADD_FILTER_REQUEST,
  cancelType: FilterAction.ADD_FILTER_FAILED,
  async process({ action, getState }, dispatch, done) {
    let data =
      getState().FilterTypeReducer && getState().FilterTypeReducer.data
        ? getState().FilterTypeReducer.data
        : [];
    dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/filter-type",
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
      toastId = toast.success("Add Filter Success!");
      // dispatch(getFilterTypeRequest());
      dispatch(
        getFilterTypeSuccess({
          data: [...data, { ...result.data, filter_data: [] }],
          isLoading: false,
        })
      );
      dispatch(modalCloseRequest({ addAllergyModalOpen: false }));
      dispatch(hideLoader());
      done();
    }
  },
});

// getList
const getFilterTypeLogic = createLogic({
  type: FilterAction.GET_FILTER_REQUEST,
  cancelType: FilterAction.GET_FILTER_FAILED,
  async process({ action }, dispatch, done) {
    dispatch(getFilterTypeSuccess({ isLoading: true }));
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/filter-type/list",
      "GET",
      true,
      undefined,
      undefined
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      dispatch(getFilterTypeSuccess({ isLoading: false }));
      done();
      return;
    } else {
      logger(result);
      dispatch(getFilterTypeSuccess({ data: result.data, isLoading: false }));
      done();
      return;
    }
  },
});
const addFilterDataLogic = createLogic({
  type: FilterAction.ADD_FILTERDATA_REQUEST,
  cancelType: FilterAction.ADD_FILTERDATA_FAILED,
  async process({ action, getState }, dispatch, done) {
    dispatch(
      getFilterTypeSuccess({
        updateReq: "Start",
      })
    );
    let data =
      getState().FilterTypeReducer && getState().FilterTypeReducer.data
        ? getState().FilterTypeReducer.data
        : [];
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/filter-data",
      "POST",
      true,
      undefined,
      action.payload
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      // dispatch(hideLoader());
      done();
      return;
    } else {
      logger(result);
      let index =
        data &&
        data.findIndex((item) => item._id === action.payload.filter_type_id);
      data[index] = {
        ...data[index],
        filter_data: [result.data, ...data[index].filter_data],
      };
      dispatch(
        getFilterTypeSuccess({
          data: data,
          isLoading: false,
          updateReq: "End",
        })
      );
      //   dispatch(modalCloseRequest({ addCalorieModalOpen: false }));
      dispatch(hideLoader());
      done();
    }
  },
});
const addBulkFilterDataLogic = createLogic({
  type: FilterAction.ADDBULK_FILTERDATA_REQUEST,
  cancelType: FilterAction.ADDBULK_FILTERDATA_FAILED,
  async process({ action, getState }, dispatch, done) {
    dispatch(
      getFilterTypeSuccess({
        updateReq: "Start",
      })
    );
    let data =
      getState().FilterTypeReducer && getState().FilterTypeReducer.data
        ? getState().FilterTypeReducer.data
        : [];
    dispatch(showLoader());
    let filter_type_id = action.payload.get("filter_type_id");
    action.payload.delete("filter_type_id");
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      `/filter-data/${filter_type_id}/bulk-create`,
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
      toastId = toast.success("Success!");
      let index = data && data.findIndex((item) => item._id === filter_type_id);
      data[index] = {
        ...data[index],
        filter_data: [...data[index].filter_data, ...result.data],
      };
      dispatch(
        getFilterTypeSuccess({
          data: data,
          isLoading: false,
          updateReq: "End",
        })
      );
      dispatch(modalCloseRequest({ BulkFilterData: false }));
      dispatch(hideLoader());
      done();
    }
  },
});

const updateFilterDataLogic = createLogic({
  type: FilterAction.UPDATE_FILTERDATA_REQUEST,
  cancelType: FilterAction.UPDATE_FILTERDATA_FAILED,
  async process({ action, getState }, dispatch, done) {
    dispatch(
      getFilterTypeSuccess({
        updateReq: "Start",
      })
    );
    let data =
      getState().FilterTypeReducer && getState().FilterTypeReducer.data
        ? getState().FilterTypeReducer.data
        : [];
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      ["/filter-data/" + action.payload.FDId],
      "PUT",
      true,
      undefined,
      action.payload
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      done();
      return;
    } else {
      logger(result);
      let index =
        data &&
        data.findIndex((item) => item._id === action.payload.filter_type_id);
      let data1 = data[index].filter_data ? data[index].filter_data : [];
      let index1 =
        data1 && data1.findIndex((item) => item._id === action.payload.FDId);
      data1[index1] = result.data;

      data[index] = {
        ...data[index],
        filter_data: data1,
      };
      dispatch(
        getFilterTypeSuccess({
          data: data,
          isLoading: false,
          updateReq: "End",
        })
      );
      done();
      return;
    }
  },
});
const updateFilterTypeLogic = createLogic({
  type: FilterAction.UPDATE_FILTER_REQUEST,
  cancelType: FilterAction.UPDATE_FILTER_FAILED,
  async process({ action, getState }, dispatch, done) {
    dispatch(
      getFilterTypeSuccess({
        updateReq: "Start",
      })
    );
    let data =
      getState().FilterTypeReducer && getState().FilterTypeReducer.data
        ? getState().FilterTypeReducer.data
        : [];
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      ["/filter-type/" + action.payload.filter_type_id],
      "PUT",
      true,
      undefined,
      action.payload
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      done();
      return;
    } else {
      logger(result);
      let index =
        data &&
        data.findIndex((item) => item._id === action.payload.filter_type_id);
      if (result.data && result.data.is_removed) {
        data.splice(index,1)
      } else {
        data[index] = {
          ...result.data,
          filter_data: data[index].filter_data,
        };
      }
      dispatch(
        getFilterTypeSuccess({
          data: data,
          isLoading: false,
          updateReq: "End",
        })
      );
      done();
      return;
    }
  },
});

export const FilterTypeLogic = [
  addFilterTypeLogic,
  addFilterDataLogic,
  getFilterTypeLogic,
  updateFilterDataLogic,
  addBulkFilterDataLogic,
  updateFilterTypeLogic,
];
