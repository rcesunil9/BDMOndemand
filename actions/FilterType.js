import { createAction } from "redux-actions";

export const FilterAction = {
  ADD_FILTER_REQUEST: "ADD FILTER REQUESTED!",
  ADD_FILTER_SUCCESS: "ADD FILTER SUCCESS!",
  ADD_FILTER_FAILED: "ADD FILTER FAILED!",

  
  ADD_FILTERDATA_REQUEST: "ADD FILTER DATA REQUESTED!",
  ADD_FILTERDATA_SUCCESS: "ADD FILTER DATA SUCCESS!",
  ADD_FILTERDATA_FAILED: "ADD FILTER DATA FAILED!",

  
  UPDATE_FILTERDATA_REQUEST: "UPDATE FILTER DATA REQUESTED!",
  UPDATE_FILTERDATA_SUCCESS: "UPDATE FILTER DATA SUCCESS!",
  UPDATE_FILTERDATA_FAILED: "UPDATE FILTER DATA FAILED!",


  
  ADDBULK_FILTERDATA_REQUEST: "ADDBULK FILTER DATA REQUESTED!",
  ADDBULK_FILTERDATA_SUCCESS: "ADDBULK FILTER DATA SUCCESS!",
  ADDBULK_FILTERDATA_FAILED: "ADDBULK FILTER DATA FAILED!",


  GET_FILTER_REQUEST: "GET FILTERS REQUESTED!",
  GET_FILTER_SUCCESS: "GET FILTER SUCCESS!",
  GET_FILTER_FAILED: "GET FILTER FAILED!",

  GET_FILTER_REQUEST_BY_ID: "GET FILTERS REQUESTED BY ID!",
  GET_FILTER_SUCCESS_BY_ID: "GET FILTER SUCCESS BY ID!",
  GET_FILTER_FAILED_BY_ID: "GET FILTER FAILED BY ID!",

  UPDATE_FILTER_REQUEST: "UPDATE FILTERS REQUESTED!",
  UPDATE_FILTER_SUCCESS: "UPDATE FILTER SUCCESS!",
  UPDATE_FILTER_FAILED: "UPDATE FILTER FAILED!",

  
};

// add Filters
export const addFilterTypeRequest = createAction(
  FilterAction.ADD_FILTER_REQUEST
);

export const addFilterTypeSuccess = createAction(
  FilterAction.ADD_FILTER_SUCCESS
);
export const addFilterTypeFailed = createAction(
  FilterAction.ADD_FILTER_FAILED
);


export const addFilterDataRequest = createAction(
  FilterAction.ADD_FILTERDATA_REQUEST
);

export const addFilterDataSuccess = createAction(
  FilterAction.ADD_FILTERDATA_SUCCESS
);
export const addFilterDataFailed = createAction(
  FilterAction.ADD_FILTERDATA_FAILED
);



export const updateFilterDataRequest = createAction(
  FilterAction.UPDATE_FILTERDATA_REQUEST
);

export const updateFilterDataSuccess = createAction(
  FilterAction.UPDATE_FILTER_SUCCESS
);
export const updateFilterDataFailed = createAction(
  FilterAction.UPDATE_FILTERDATA_FAILED
);

export const addBulkFilterDataRequest = createAction(
  FilterAction.ADDBULK_FILTERDATA_REQUEST
);

export const addBulkFilterDataSuccess = createAction(
  FilterAction.ADDBULK_FILTERDATA_SUCCESS
);
export const addBulkFilterDataFailed = createAction(
  FilterAction.ADDBULK_FILTERDATA_FAILED
);


// // GET Filters

export const getFilterTypeRequest = createAction(
  FilterAction.GET_FILTER_REQUEST
);

export const getFilterTypeSuccess = createAction(
  FilterAction.GET_FILTER_SUCCESS
);
export const getFilterTypeFailed = createAction(
  FilterAction.GET_FILTER_FAILED
);

// // GET Filters BY ID

// export const getFilterRequestById = createAction(
//   FilterAction.GET_FILTER_REQUEST_BY_ID
// );

// export const getFilterSuccessById = createAction(
//   FilterAction.GET_FILTER_SUCCESS_BY_ID
// );
// export const getFilterFailedById = createAction(
//   FilterAction.GET_FILTER_FAILED_BY_ID
// );

// // update Filter

export const updateFilterRequest = createAction(
  FilterAction.UPDATE_FILTER_REQUEST
);

export const updateFilterSuccess = createAction(
  FilterAction.UPDATE_FILTER_SUCCESS
);
export const updateFilterFailed = createAction(
  FilterAction.UPDATE_FILTER_FAILED
);

