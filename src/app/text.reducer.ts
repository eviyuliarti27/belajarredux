import { createReducer, on } from '@ngrx/store';
import { update, reset } from './text.action';

export const initialState = 'jangan'; // menggambarkan jika si statenya 0

// action
const _textReducer = createReducer(initialState,
  on(update, (state, { name, username }) => { 
      console.log(name, username)
    return state + name + username}),
//   on(reset, state => 0), //  state sama dengan 0
);

// function reducer yg isinya ada state and action
export function textReducer(state, action) {
  return _textReducer(state, action);
}