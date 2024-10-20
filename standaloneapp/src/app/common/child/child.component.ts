import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() nameObj: any;

  @Output() dataupdater: EventEmitter<string> = new EventEmitter<string>();

  fruits: any = ['Mango', 'Orange'];

  updateFruits(fruitName: string){
    this.fruits.push(fruitName);
    return 'data added successfully';
  }

}
