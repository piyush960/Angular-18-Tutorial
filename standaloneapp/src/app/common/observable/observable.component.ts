import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AsyncSubject, BehaviorSubject, concat, delay, every, filter, find, last, map, merge, Observable, of, ReplaySubject, Subject, take } from 'rxjs';
import { ChildNewComponent } from '../child-new/child-new.component';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule, MatCardModule, ChildNewComponent],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit {

  _jsonList = [
    {'name': 'Alex', 'gender': 'Female', 'color': 'lightblue'},
    {'name': 'Sam', 'gender': 'Female', 'color': 'peachpuff'},
    {'name': 'Tobey', 'gender': 'Male', 'color': 'lightpink'}
  ]

  _jsonList$ = of(this._jsonList);

  data$ = of(1, 2, 3).pipe(delay(1000));
  data1$ = of(4, 5, 6);
  data2$ = of(7, 8, 9);

  subject$ = new Subject();
  behaviourSubject$ = new BehaviorSubject(1); // requires a default value
  replaySubject$ = new ReplaySubject();
  asyncSubject$ = new AsyncSubject();
 
  observable$ = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next('Order Placed')
    }, 2000)
    setTimeout(() => {
      subscriber.next('Order Approved')
    }, 4000)
    setTimeout(() => {
      subscriber.next('Order Shipped')
    }, 6000)
    setTimeout(() => {
      subscriber.complete()
      subscriber.next('Order Delivered')
    }, 7000)
  })

  ngOnInit(){
    /*
    this.observable$.subscribe({
      next(data){
        console.log(data);
      },
      error(err){
        console.log('error message ', err)
      },
      complete(){
        console.log('Completed');
      }
    })
  
    this.data$.pipe(map(x => x*2)).subscribe(item => console.log(item));

    this.data$.pipe(filter(x => x > 1)).subscribe(item => console.log(item));

    // if there is delay in loading the data then merge will not wait and move to the next data
    merge(this.data$, this.data1$, this.data2$).subscribe(item => console.log(item));

    // if there is delay in loading the data then concat will wait for the data to load
    concat(this.data$, this.data1$).subscribe(item => console.log(item));

    // returns the first matching value
    this.data1$.pipe(find(x => x > 4)).subscribe(item => console.log('find ', item));

    // returns the number of items specified
    this.data1$.pipe(take(2)).subscribe(item => console.log('take ', item));

    // return true of false based on if all the values matches specific condition
    this.data1$.pipe(every(x => x > 3)).subscribe(item => console.log('every ', item));

    // first() / last() returns the first / last value
    this.data1$.pipe(last()).subscribe(item => console.log('last ', item)) 
    */

    console.log('\nSimple Subject');
    this.subject$.subscribe(item => {
      console.log('Observer 1: ', item);
    })
    this.subject$.next(1);
    this.subject$.next(2);
    this.subject$.subscribe(item => {
      console.log('Observer 2: ', item);
    })
    this.subject$.next(3);
    
    console.log('\nBehaviour Subject')
    this.behaviourSubject$.subscribe(item => {
      console.log('Observer 1: ', item);
    })
    this.behaviourSubject$.next(1);
    this.behaviourSubject$.next(2);
    this.behaviourSubject$.subscribe(item => {
      console.log('Observer 2: ', item);
    })
    this.behaviourSubject$.next(3);

    console.log('\nReplay Subject')
    this.replaySubject$.subscribe(item => {
      console.log('Observer 1: ', item);
    })
    this.replaySubject$.next(1);
    this.replaySubject$.next(2);
    this.replaySubject$.subscribe(item => {
      console.log('Observer 2: ', item);
    })
    this.replaySubject$.next(3);

    console.log('\nAsync Subject')
    this.asyncSubject$.subscribe(item => {
      console.log('Observer 1: ', item);
    })
    this.asyncSubject$.next(1);
    this.asyncSubject$.next(2);
    this.asyncSubject$.complete();
    this.asyncSubject$.subscribe(item => {
      console.log('Observer 2: ', item);
    })
    this.asyncSubject$.next(3);



  }

}
