import { Component, computed, effect } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent {
  displayValue!: number;
  displayPlayersCount: any = computed(() => this.service.players().length)

  _displayPlayersCount$ = toObservable(this.displayPlayersCount);
  _displayPlayersCountSG = toSignal(this._displayPlayersCount$);

  constructor(public service:MasterService){
    effect(() => {
      this.displayValue = this.service.counterValue()
    })
  }
}
