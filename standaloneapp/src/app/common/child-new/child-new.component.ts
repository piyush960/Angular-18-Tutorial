import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-child-new',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './child-new.component.html',
  styleUrl: './child-new.component.css'
})
export class ChildNewComponent {

}
