import { Component, Inject } from '@angular/core';
import * as Redux from "redux"
import { AppStore } from '../../app.store';
import { AppState } from '../../app.state'
import * as CounterActions from '../../actions/counter.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(() => this.readState())
  }

  readState() {
    const state: AppState = this.store.getState()
    this.counter = state.counter
  }

  increment() {
    this.store.dispatch(CounterActions.increment())
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement())
  }
}
