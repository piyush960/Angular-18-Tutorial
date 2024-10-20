import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/productModel';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { catchError, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatButtonModule, CommonModule, MatDialogModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnDestroy {
  
  constructor(private service: ProductService, private dialog: MatDialog){}
  
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'action'];
  dataSource = new MatTableDataSource<Product>;
  subscription = new Subscription();
  
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  
  ngOnInit(): void {
    this.getAllProduct()
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  productList : Product[] = [];

  getAllProduct(){
    const sub1 = this.service.getAll().pipe(
      catchError(err => {
        console.log(err.message);
        return of([])
      })
    ).subscribe(data => {
      this.productList = data;
      this.dataSource = new MatTableDataSource(this.productList);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
    this.subscription.add(sub1);
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
    this.dialog.open(AddProductComponent, {
      width: '40%',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      data: {
        row, title
      }
    }).afterClosed().subscribe(item=> {
      this.getAllProduct();
    })
  }

  updateProduct(row: Product){
    this.openPopup(row, 'Edit Product')
  }

  deleteProduct(id: number){
    const sub2 = this.service.removeProduct(id).subscribe(item=>{
      alert('deleted successfully')
      this.getAllProduct();
    })
    this.subscription.add(sub2);
  }

}
