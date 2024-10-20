import { createAction, props } from "@ngrx/store";
import { Product } from "../model/productModel";

export const LOAD_PRODUCT = '[product] load product';
export const LOAD_PRODUCT_SUCCESS = '[product] load product success';
export const LOAD_PRODUCT_FAIL = '[product] load product failure';

export const alertAction = createAction('empty');

export const loadProduct = createAction(LOAD_PRODUCT);
export const loadProductSuccess = createAction(LOAD_PRODUCT_SUCCESS, props<{list: Product[]}>());
export const loadProductFail = createAction(LOAD_PRODUCT_FAIL, props<{errMsg: string}>());


export const ADD_PRODUCT = '[product] add product';
export const ADD_PRODUCT_SUCCESS = '[product] add product success';

export const addProduct = createAction(ADD_PRODUCT, props<{inputData: Product}>());
export const addProductSuccess = createAction(ADD_PRODUCT_SUCCESS, props<{inputData: Product}>());

export const UPDATE_PRODUCT = '[product] update product';
export const UPDATE_PRODUCT_SUCCESS = '[product] update product success';

export const updateProduct = createAction(UPDATE_PRODUCT, props<{inputData: Product}>());
export const updateProductSuccess = createAction(UPDATE_PRODUCT_SUCCESS, props<{inputData: Product}>());

export const DELETE_PRODUCT = '[product] delete product';
export const DELETE_PRODUCT_SUCCESS = '[product] delete product success';

export const deleteProduct = createAction(DELETE_PRODUCT, props<{id: number}>());
export const deleteProductSuccess = createAction(DELETE_PRODUCT_SUCCESS, props<{id: number}>());