import { toast } from "react-toastify";
import { createLogic } from "redux-logic";
import { ApiHelper } from "../Helpers/ApiHelper";
import { logger } from "../Helpers/Logger";
import { DefaultErrorMessage } from "../config/Constants";
import { AppRoutes } from "../config/AppRoutes";
import {
  showLoader,
  hideLoader,
  categoriesActions,
  addCategoriesSuccess,
  getCategoriesSuccess,
  getCategoriesRequest,
  modalCloseRequest,
  getCategoriesSuccessById,
} from "../actions";
let toastId = null;

/**
 *  CRUD Categories
 */
// const addCategoriesLogic = createLogic({
//   type: categoriesActions.ADD_CATEGORIE_REQUEST,
//   cancelType: categoriesActions.ADD_CATEGORIE_FAILED,
//   async process({ action }, dispatch, done) {
//     dispatch(showLoader());
//     let api = new ApiHelper();
//     let result = await api.FetchFromServer(
//       "",
//       "/category",
//       "POST",
//       true,
//       undefined,
//       action.payload
//     );
//     if (result.isError) {
//       if (!toast.isActive(toastId)) {
//         toastId = toast.error(result.messages[0] || DefaultErrorMessage);
//       }
//       dispatch(hideLoader());
//       done();
//       return;
//     } else {
//       logger(result);
//       toastId = toast.success("Add Category Success!");
//       dispatch(modalCloseRequest({ addCategoryModalOpen: false }));
//       dispatch(getCategoriesRequest());
//       dispatch(hideLoader());
//       done();
//     }
//   },
// });

const addCategoriesLogic = createLogic({
  type: categoriesActions.ADD_CATEGORIE_REQUEST,
  cancelType: categoriesActions.ADD_CATEGORIE_FAILED,
  async process({ action, getState }, dispatch, done) {
    dispatch(getCategoriesSuccess({ updateReq: "Start" }));
    let data =
      getState().CategorieReducer && getState().CategorieReducer.data
        ? getState().CategorieReducer.data
        : [];
    // dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/category",
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
      console.log("result", result.data);
      dispatch(
        getCategoriesSuccess({
          data: [...data, result.data],
          isLoading: false,
          updateReq: "End",
        })
      );
      dispatch(hideLoader());
      done();
    }
  },
});

// getList
const getCategoriesLogic = createLogic({
  type: categoriesActions.GET_CATEGORIE_REQUEST,
  cancelType: categoriesActions.GET_CATEGORIE_FAILED,
  async process({ action }, dispatch, done) {
    dispatch(getCategoriesSuccess({ isLoading: true }));
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/category",
      "GET",
      true,
      undefined,
      undefined
    );
    if (result.isError) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(result.messages[0] || DefaultErrorMessage);
      }
      dispatch(getCategoriesSuccess({ isLoading: false }));
      done();
      return;
    } else {
      logger(result);
      dispatch(getCategoriesSuccess({ data: result.data, isLoading: false }));
      done();
      return;
    }
  },
});

// get Data by Id

const getCategoriesByIdLogic = createLogic({
  type: categoriesActions.GET_CATEGORIE_REQUEST_BY_ID,
  cancelType: categoriesActions.GET_CATEGORIE_FAILED_BY_ID,
  async process({ action }, dispatch, done) {
    dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      ["/category/" + action.payload.cId],
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
      dispatch(getCategoriesSuccessById({ dataById: result.data }));
      dispatch(hideLoader());
      done();
      return;
    }
  },
});

// update

const updateCategoriesLogic = createLogic({
  type: categoriesActions.UPDATE_CATEGORIE_REQUEST,
  cancelType: categoriesActions.UPDATE_CATEGORIE_FAILED,
  async process({ action, getState }, dispatch, done) {
    dispatch(getCategoriesSuccess({ updateReq: "Start" }));
    let data =
      getState().CategorieReducer && getState().CategorieReducer.data
        ? getState().CategorieReducer.data
        : [];
    // dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      ["/category/" + action.payload.cId],
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
      dispatch(getCategoriesSuccessById({ dataById: {} }));
      let index = data.findIndex((item) => item._id === action.payload.cId);
      data[index] = result.data;
      dispatch(
        getCategoriesSuccess({ data: data, isLoading: false, updateReq: "End" })
      );
      done();
      return;
    }
  },
});

// const updateCategoriesLogic = createLogic({
//   type: categoriesActions.UPDATE_CATEGORIE_REQUEST,
//   cancelType: categoriesActions.UPDATE_CATEGORIE_FAILED,
//   async process({ action }, dispatch, done) {
//     dispatch(showLoader());
//     let api = new ApiHelper();
//     let result = await api.FetchFromServer(
//       "",
//       ["/category/" + action.payload.cId],
//       "PUT",
//       true,
//       undefined,
//       action.payload
//     );
//     if (result.isError) {
//       if (!toast.isActive(toastId)) {
//         toastId = toast.error(result.messages[0] || DefaultErrorMessage);
//       }
//       dispatch(hideLoader());
//       done();
//       return;
//     } else {
//       logger(result);
//       toastId = toast.success("Updated Category Success!");
//       dispatch(
//         modalCloseRequest({
//           editCategoryModalOpen: false,
//         })
//       );
//       dispatch(getCategoriesSuccessById({ dataById: {} }));
//       dispatch(getCategoriesRequest());
//       dispatch(hideLoader());
//       done();
//       return;
//     }
//   },
// });

// ADD Bulk DATA

const addBulkCategoriesLogic = createLogic({
  type: categoriesActions.ADD_BULKCATEGORIE_REQUEST,
  cancelType: categoriesActions.ADD_BULKCATEGORIE_FAILED,
  async process({ action }, dispatch, done) {
    dispatch(showLoader());
    let api = new ApiHelper();
    let result = await api.FetchFromServer(
      "",
      "/category-bulk-create",
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
      toastId = toast.success("Add Successfully!");
      dispatch(modalCloseRequest({ bulkCategoryModalOpen: false }));
      dispatch(getCategoriesRequest());
      dispatch(hideLoader());
      done();
    }
  },
});

export const CategoriesLogic = [
  addCategoriesLogic,
  getCategoriesLogic,
  updateCategoriesLogic,
  getCategoriesByIdLogic,
  addBulkCategoriesLogic,
];
