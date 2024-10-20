import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../model/productModel';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../service/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatCheckboxModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit, OnDestroy{

  constructor(private builder:FormBuilder, private service: ProductService, private ref:MatDialogRef<AddProductComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}
 

  productdata: any;
  subscription = new Subscription();

  ngOnInit(): void {
    this.productdata = this.data;
    this.productForm.setValue(
      this.productdata.row
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  productForm = this.builder.group( {
    id: this.builder.control(0),
    name: this.builder.control(''),
    description: this.builder.control(''),
    price: this.builder.control(0),
    status: this.builder.control(true)
  })

  proceedSave(){
    if(this.productForm.valid){
      const _data = {
        id: this.productForm.value.id as number,
        name: this.productForm.value.name as string,
        description: this.productForm.value.description as string,
        price: this.productForm.value.price as number,
        status: this.productForm.value.status as boolean,
      }
      if(this.productdata.row.id !== 0){
        console.log(_data)
        const sub1 = this.service.updateProduct(_data).subscribe(item=>{
          alert('updated successfully')
        })
        this.subscription.add(sub1);
      }
      else{
        const sub2 = this.service.addProduct(_data).subscribe(item=>{
          alert('added successfully')
        })
        this.subscription.add(sub2);
      }
      this.productForm.reset()
      this.closePopup()
    }
  }

  deleteProduct(id: number){

  }

  closePopup(){
    this.ref.close()
  }

}
