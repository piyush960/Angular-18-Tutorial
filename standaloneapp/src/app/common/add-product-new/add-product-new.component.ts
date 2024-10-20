import { Component, Inject, OnInit } from '@angular/core';
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
import { Store } from '@ngrx/store';
import { addProduct, updateProduct } from '../../_store/product.action';

@Component({
  selector: 'app-add-product-new',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatCheckboxModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './add-product-new.component.html',
  styleUrl: './add-product-new.component.css'
})
export class AddProductNewComponent {

  constructor(private builder:FormBuilder, private store: Store, private ref:MatDialogRef<AddProductNewComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  productdata: any;

  ngOnInit(): void {
    this.productdata = this.data;
    this.productForm.setValue(
      this.productdata.row
    )
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
      const _data: Product = {
        id: this.productForm.value.id as number,
        name: this.productForm.value.name as string,
        description: this.productForm.value.description as string,
        price: this.productForm.value.price as number,
        status: this.productForm.value.status as boolean,
      }
      console.log(_data)
      if(this.productdata.row.id !== 0){
        this.store.dispatch(updateProduct({inputData: _data}))
      }
      else{
        this.store.dispatch(addProduct({inputData: _data}))
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
