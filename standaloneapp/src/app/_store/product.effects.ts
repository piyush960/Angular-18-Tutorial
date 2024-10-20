import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../service/product.service";
import { addProduct, addProductSuccess, alertAction, deleteProduct, deleteProductSuccess, loadProduct, loadProductFail, loadProductSuccess, updateProduct, updateProductSuccess } from "./product.action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";

@Injectable()
export class ProductEffect{

    constructor(private action$: Actions, private service: ProductService){

    }

    _loadProducts = createEffect(() => (
        this.action$.pipe(
            ofType(loadProduct),
            exhaustMap((action) => (
                this.service.getAll().pipe(
                    map(data => loadProductSuccess({list: data})),
                    catchError(err => of(loadProductFail({errMsg: err.message})))
                )
            ))
        )
    ))

    _addProduct = createEffect(() => (
        this.action$.pipe(
            ofType(addProduct),
            switchMap((action) => (
                this.service.addProduct(action.inputData).pipe(
                    switchMap(data => of(addProductSuccess({inputData: action.inputData}), this.showAlert('added successfully'))),
                    catchError(err => of(this.showAlert(err.message)))
                )
            ))
        )
    ))

    _updateProduct = createEffect(() => (
        this.action$.pipe(
            ofType(updateProduct),
            switchMap((action) => (
                this.service.updateProduct(action.inputData).pipe(
                    switchMap(data => of(updateProductSuccess({inputData: action.inputData}), this.showAlert('updated successfully'))),
                    catchError(err => of(this.showAlert(err.message)))
                )
            ))
        )
    ))

    _deleteProduct = createEffect(() => (
        this.action$.pipe(
            ofType(deleteProduct),
            switchMap((action) => (
                this.service.removeProduct(action.id).pipe(
                    switchMap(data => of(deleteProductSuccess({id: action.id}), this.showAlert('deleted successfully'))),
                    catchError(err => of(this.showAlert(err.message)))
                )
            ))
        )
    ))

    showAlert(message: string){
        alert(message)
        return alertAction()
    }

    
}