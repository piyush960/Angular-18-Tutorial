import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-counterbtn',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counterbtn.component.html',
  styleUrl: './counterbtn.component.css'
})
export class CounterbtnComponent {

  constructor(private service:MasterService){}

  increment(){
    this.service.counterValue.update(prev => prev + 1);
  }

  decrement(){
    this.service.counterValue.update(prev => prev - 1);
  }

  reset(){
    this.service.counterValue.set(0);
  }

  addPlayer(name: string){
    const id  = this.service.players().length + 1;
    this.service.players.update(prev => [...prev, {id, name}]);
  }

}
