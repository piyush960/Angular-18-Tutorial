import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  pageName: string  = '';

  constructor(private router:Router){

  }

  ngOnInit(): void {
    if(this.router.url.includes('add')){
      this.pageName = 'Add page'
    }
    else{
      this.pageName = 'Edit page'
    }
  }

}
