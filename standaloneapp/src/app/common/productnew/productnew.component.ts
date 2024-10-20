import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../model/productModel';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { deleteProduct, loadProduct } from '../../_store/product.action';
import { getErrMsg, getProductList } from '../../_store/product.selector';
import { AddProductNewComponent } from '../add-product-new/add-product-new.component';
import { catchError, of, subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-productnew',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatButtonModule, CommonModule, MatDialogModule],
  templateUrl: './productnew.component.html',
  styleUrl: './productnew.component.css'
})
export class ProductnewComponent implements OnDestroy{
  
  constructor(private store: Store, private dialog: MatDialog){}
  
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'action'];
  dataSource = new MatTableDataSource<Product>;
  susbcription: Subscription = new Subscription();
  errMsg: string = 'Data not Available :(';
  
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  
  ngOnInit(): void {
    this.getAllProduct()
  }
  
  ngOnDestroy(): void {
    this.susbcription.unsubscribe();
  }

  productList : Product[] = [];

  getAllProduct(){
    this.store.dispatch(loadProduct())
    const sub1 = this.store.select(getProductList).subscribe(data => {
      this.productList = data;
      this.dataSource = new MatTableDataSource(this.productList);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
    const sub2 = this.store.select(getErrMsg).subscribe(data => {
      this.errMsg = data ? data : this.errMsg;
    })
    this.susbcription.add(sub1);
    this.susbcription.add(sub2);
  }

  addProduct(){
    const row: Product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      status: false
    }
    this.openPopup(row, 'Add New Product')
  }

  openPopup(row: Product, title: string){
    this.dialog.open(AddProductNewComponent, {
      width: '40%',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      data: {
        row, title
      }
    }).afterClosed().subscribe(item=> {
      // this.getAllProduct();
    })
  }

  updateProduct(row: Product){
    this.openPopup(row, 'Edit Product')
  }

  deleteProduct(id: number){
    this.store.dispatch(deleteProduct({id}))
  }
}
