import { createAction } from "redux-actions";

export const calorieActions = {
  ADD_CALORIE_REQUEST: "ADD CALORIE REQUESTED!",
  ADD_CALORIE_SUCCESS: "ADD CALORIE SUCCESS!",
  ADD_CALORIE_FAILED: "ADD CALORIE FAILED!",

  GET_CALORIE_REQUEST: "GET CALORIE REQUESTED!",
  GET_CALORIE_SUCCESS: "GET CALORIE SUCCESS!",
  GET_CALORIE_FAILED: "GET CALORIE FAILED!",

  
  GET_CALORIE_REQUEST_BY_ID: "GET CALORIE REQUESTED BY ID!",
  GET_CALORIE_SUCCESS_BY_ID: "GET CALORIE SUCCESS BY ID!",
  GET_CALORIE_FAILED_BY_ID: "GET CALORIE FAILED BY ID!", 

  UPDATE_CALORIE_REQUEST: "UPDATE CALORIE REQUESTED!",
  UPDATE_CALORIE_SUCCESS: "UPDATE CALORIE SUCCESS!",
  UPDATE_CALORIE_FAILED: "UPDATE CALORIE FAILED!",

  ADD_BULKCALORIE_REQUEST: "ADD BULKCALORIE REQUESTED!",
  ADD_BULKCALORIE_SUCCESS: "ADD BULKCALORIE SUCCESS!",
  ADD_BULKCALORIE_FAILED: "ADD BULKCALORIE FAILED!",
};

// add Calories
export const addCalorieRequest = createAction(
  calorieActions.ADD_CALORIE_REQUEST
);

export const addCalorieSuccess = createAction(
  calorieActions.ADD_CALORIE_SUCCESS
);
export const addCalorieFailed = createAction(
  calorieActions.ADD_CALORIE_FAILED
);

// add BULK Calories
export const addBulkCalorieRequest = createAction(
    calorieActions.ADD_BULKCALORIE_REQUEST
  );
  
  export const addBulkCalorieSuccess = createAction(
    calorieActions.ADD_BULKCALORIE_SUCCESS
  );
  export const addBulkCalorieFailed = createAction(
    calorieActions.ADD_BULKCALORIE_FAILED
  );
  
// GET Calories

export const getCalorieRequest = createAction(
  calorieActions.GET_CALORIE_REQUEST
  );
  
  export const getCalorieSuccess = createAction(
    calorieActions.GET_CALORIE_SUCCESS
  );
  export const getCalorieFailed = createAction(
    calorieActions.GET_CALORIE_FAILED
  );

  // get Allerry By ID
  export const getCalorieRequestById = createAction(
    calorieActions.GET_CALORIE_REQUEST_BY_ID
    );
    
    export const getCalorieSuccessById = createAction(
      calorieActions.GET_CALORIE_SUCCESS_BY_ID
    );
    export const getCalorieFailedById = createAction(
      calorieActions.GET_CALORIE_FAILED_BY_ID
    );
  
// update CALORIEs

  export const updateCalorieRequest = createAction(
    calorieActions.UPDATE_CALORIE_REQUEST
  );
  
  export const updateCalorieSuccess = createAction(
    calorieActions.UPDATE_CALORIE_SUCCESS
  );
  export const updateCalorieFailed = createAction(
    calorieActions.UPDATE_CALORIE_FAILED
  );
    