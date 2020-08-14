import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0; // menggambarkan jika si statenya 0

// action
const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0), //  state sama dengan 0
);

// function reducer yg isinya ada state and action
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}