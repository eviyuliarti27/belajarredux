import { createAction, props } from '@ngrx/store';

export const update = createAction('[Text Component] Update',
props<{ name: string; username:string }>());
// export const decrement = createAction('[Text Component] Decrement');
export const reset = createAction('[Text Component] Reset');