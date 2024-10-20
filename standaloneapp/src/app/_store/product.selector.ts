import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductStateModel } from "../model/productStateModel";

const getProductState = createFeatureSelector<ProductStateModel>('product');
export const getProductList = createSelector(getProductState, (state) => state.list);
export const getErrMsg = createSelector(getProductState, (state) => state.errMsg);