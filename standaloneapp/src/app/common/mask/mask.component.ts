import { Component } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-mask',
  standalone: true,
  imports: [NgxMaskDirective, NgxMaskPipe],
  templateUrl: './mask.component.html',
  styleUrl: './mask.component.css'
})
export class MaskComponent {

}
