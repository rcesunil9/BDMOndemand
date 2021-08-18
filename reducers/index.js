import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import { ResponsiveReducer } from "./responsive";
import { AuthReducer } from "./auth";
import { CategorieReducer } from "./categories";
import { SubCategorieReducer } from "./subCategories";
import { AllergyReducer } from "./ListAllergies";
import { ModalReducer } from "./modalOperations";
import {SpiceLevelReducer} from './spiceLevel';
import {CaloriesReducer} from './Calorie'; 
import {FoodTypeReducer} from './FoodType';
import {FilterTypeReducer} from './FilterTypeReduser'
export const mainReducer = handleActions(
  {
    SHOW_LOADER: (state, action) => ({
      showLoader: true,
    }),
    HIDE_LOADER: (state, action) => ({
      showLoader: false,
    }),
  },
  {
    showLoader: false,
  }
);

const AppReducer = combineReducers({
  mainReducer,
  ResponsiveReducer,
  AuthReducer,
  CategorieReducer,
  SubCategorieReducer,
  AllergyReducer,
  SpiceLevelReducer,
  ModalReducer,
  CaloriesReducer,
  FoodTypeReducer,
  FilterTypeReducer,
  routing: routerReducer,
});

export default AppReducer;
