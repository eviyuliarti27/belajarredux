import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { update} from '../text.action';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<any>) { 
    this.count$ = store.pipe(select('count')); // pipe itu punya banyak rxjx kayak map, flatchmap
  }

  ngOnInit(): void {
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }
 
  reset() {
    //
  }

  update(){
    this.store.dispatch(update({name: 'coba', username: 'tayo'})); // mengupdate value store
  }
}
