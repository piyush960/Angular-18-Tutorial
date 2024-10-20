import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <p>
      contact works!
    </p>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');  
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');  
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');  
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');  
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');  
  }
  ngOnInit(): void {
    console.log('ngOnInit');  
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');  
  }


}
