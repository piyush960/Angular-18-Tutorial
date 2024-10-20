import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-appmenu',
  standalone: true,
  imports: [ MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, CommonModule],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent implements DoCheck {

  constructor(private router:Router, public service: MasterService){}
  
  showmenu: boolean = true;

  ngDoCheck(): void {
    if(this.router.url === '/login' || this.router.url === '/register') this.showmenu = false;
    else this.showmenu = true;
  }

}
