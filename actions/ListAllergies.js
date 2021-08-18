import { createAction } from "redux-actions";

export const allergyActions = {
  ADD_ALLERGY_REQUEST: "ADD ALLERGY REQUESTED!",
  ADD_ALLERGY_SUCCESS: "ADD ALLERGY SUCCESS!",
  ADD_ALLERGY_FAILED: "ADD ALLERGY FAILED!",

  GET_ALLERGY_REQUEST: "GET ALLERGY REQUESTED!",
  GET_ALLERGY_SUCCESS: "GET ALLERGY SUCCESS!",
  GET_ALLERGY_FAILED: "GET ALLERGY FAILED!",

  
  GET_ALLERGY_REQUEST_BY_ID: "GET ALLERGY REQUESTED BY ID!",
  GET_ALLERGY_SUCCESS_BY_ID: "GET ALLERGY SUCCESS BY ID!",
  GET_ALLERGY_FAILED_BY_ID: "GET ALLERGY FAILED BY ID!", 

  UPDATE_ALLERGY_REQUEST: "UPDATE ALLERGY REQUESTED!",
  UPDATE_ALLERGY_SUCCESS: "UPDATE ALLERGY SUCCESS!",
  UPDATE_ALLERGY_FAILED: "UPDATE ALLERGY FAILED!",
};

// add ALLERGYs
export const addAllergyRequest = createAction(
  allergyActions.ADD_ALLERGY_REQUEST
);

export const addAllergySuccess = createAction(
  allergyActions.ADD_ALLERGY_SUCCESS
);
export const addAllergyFailed = createAction(
  allergyActions.ADD_ALLERGY_FAILED
);

// GET ALLERGYs

export const getAllergyRequest = createAction(
  allergyActions.GET_ALLERGY_REQUEST
  );
  
  export const getAllergySuccess = createAction(
    allergyActions.GET_ALLERGY_SUCCESS
  );
  export const getAllergyFailed = createAction(
    allergyActions.GET_ALLERGY_FAILED
  );

  // get Allerry By ID
  export const getAllergyRequestById = createAction(
    allergyActions.GET_ALLERGY_REQUEST_BY_ID
    );
    
    export const getAllergySuccessById = createAction(
      allergyActions.GET_ALLERGY_SUCCESS_BY_ID
    );
    export const getAllergyFailedById = createAction(
      allergyActions.GET_ALLERGY_FAILED_BY_ID
    );
  
// update ALLERGYs

  export const updateAllergyRequest = createAction(
    allergyActions.UPDATE_ALLERGY_REQUEST
  );
  
  export const updateAllergySuccess = createAction(
    allergyActions.UPDATE_ALLERGY_SUCCESS
  );
  export const updateAllergyFailed = createAction(
    allergyActions.UPDATE_ALLERGY_FAILED
  );
    