import { createReducer, on } from "@ngrx/store";
import { productState } from "./product.state";
import { addProductSuccess, deleteProductSuccess, loadProductFail, loadProductSuccess, updateProductSuccess } from "./product.action";
import { Product } from "../model/productModel";


const _productReducer = createReducer(productState, 
    on(loadProductSuccess, (state, action) => ({
        ...state,
        list: action.list,
        errMsg: ''
    })),
    on(loadProductFail, (state, action) => ({
        ...state,
        list: [],
        errMsg: action.errMsg
    })),
    on(addProductSuccess, (state, action) => {
        const newData: Product[] = [...state.list, action.inputData]
        return {
            ...state,
            list: newData,
            errMsg: ''
        }
    }),
    on(updateProductSuccess, (state, action) => {
        const newData: Product[] = state.list.map(item => {
            if(item.id == action.inputData.id){
                return action.inputData;
            }
            else return item
        })
        return {
            list: newData,
            errMsg: ''
        }
    }),
    on(deleteProductSuccess, (state, action) => {
        const newData: Product[] = state.list.filter(item => item.id !== action.id);
        return {
            list: newData,
            errMsg: ''
        }
    })
)

export function productReducer(state: any, action: any){
    return _productReducer(state, action)
}