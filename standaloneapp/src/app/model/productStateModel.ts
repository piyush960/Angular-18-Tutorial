import { Product } from "./productModel";

export interface ProductStateModel{
    list: Product[],
    errMsg: string
}