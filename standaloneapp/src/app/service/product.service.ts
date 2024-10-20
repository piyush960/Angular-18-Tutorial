import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/productModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  baseurl: string = environment.APIURL;

  getAll(){
    return this.http.get<Product[]>(this.baseurl);
  }

  getProductById(_id: number){
    return this.http.get<Product>(this.baseurl+'/'+_id);
  }

  addProduct(_data: Product){
    return this.http.post(this.baseurl, _data);
  }

  updateProduct(_data: Product){
    return this.http.put(this.baseurl+'/'+_data.id, _data);
  }

  removeProduct(_id: number){
    return this.http.delete(this.baseurl+'/'+_id);
  }

}
