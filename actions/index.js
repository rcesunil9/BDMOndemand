import { createAction } from "redux-actions";

export * from "./auth";
export * from './categories';
export * from "./responsive";
export * from "./subCategories";
export * from "./ListAllergies";
export * from "./modalOperations";
export * from "./spiceLevel";
export * from "./Calorie";
export * from "./FoodType";
export * from "./Item";
export * from "./FilterType";

export const redirectTo = createAction("REDIRET_TO");

export const showLoader = createAction("SHOW_LOADER");

export const hideLoader = createAction("HIDE_LOADER");