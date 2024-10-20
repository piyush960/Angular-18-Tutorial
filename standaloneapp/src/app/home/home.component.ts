import { Component, OnInit, signal, ViewChild } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../custom/reverse.pipe';
import { ChildComponent } from '../common/child/child.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, HomeComponent, CommonModule, FormsModule, ReversePipe, ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  @ViewChild(ChildComponent) _child!: ChildComponent;

  pagename: string = 'Home Page';
  pagecontent: string = "This is home page";
  title = signal<string>('Angular 18 Tutorial');
  text!: string;
  subtitle = "Welcome to this course";
  datetoday = new Date();
  salary = 10000;
  _obj = {'name': 'Alex'};

  ngOnInit(): void {
    setTimeout(() => {
      this.title.set('Angular For Beginners')
      this.text = 'change detected';
    }, 5000);
  }

  _jsonList = [
    {'name': 'Alex', 'gender': 'Female', 'color': 'lightblue'},
    {'name': 'Sam', 'gender': 'Female', 'color': 'peachpuff'},
    {'name': 'Tobey', 'gender': 'Male', 'color': 'lightpink'}
  ]

  _view = 'about'

  isDisabled = true

  inputFirstName: string = '';
  inputLastName: string = '';

  


  changeTitle(event: any){
    // this.title = event.target.value;
  }

  updateTitle(event: string){
    // this.title = event;
  }

  addFruit(fruitName: string){
    const response = this._child.updateFruits(fruitName);
    console.log(response)
  }

}
