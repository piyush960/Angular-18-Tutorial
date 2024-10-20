import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterdisplayComponent } from "../counterdisplay/counterdisplay.component";
import { CounterbtnComponent } from '../counterbtn/counterbtn.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterdisplayComponent, CounterbtnComponent, CounterdisplayComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent implements OnInit {

  idValue: any;
  submenu: any;

  constructor(private router: ActivatedRoute){}
  
  ngOnInit(): void {
    this.idValue = this.router.snapshot.paramMap.get('id');
    this.submenu = this.router.snapshot.paramMap.get('submenu');
  }


}
