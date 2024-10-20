import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel, user } from '../model/loginModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  counterValue = signal<number>(0);
  players = signal([{'id': 1, 'name': 'Katie'}]);

  displayName = signal<string>(environment.displayName);

  proceedLogin(_data: loginModel){
    return this.http.get<user[]>('http://localhost:3000/users?id='+_data.username+'&&password='+_data.password)
  }

  checkAuthorization(){
    return localStorage.getItem('username') != null;
  }

  proceedRegister(_data: user){
    return this.http.post('http://localhost:3000/users', _data)
  }

}
