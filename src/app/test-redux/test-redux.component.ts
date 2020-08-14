import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-redux',
  templateUrl: './test-redux.component.html',
  styleUrls: ['./test-redux.component.css']
})
export class TestReduxComponent implements OnInit {
  public terserah : Observable<number>;
  public text : Observable<string>;

  constructor(private store: Store<any>) {  }

  ngOnInit(): void {
    this.terserah = this.store.select('count');
    this.text = this.store.select('text');
  }

}
