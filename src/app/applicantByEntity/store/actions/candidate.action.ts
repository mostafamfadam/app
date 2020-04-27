import { Bewerber } from './../reducers/candidate.reducer';
import { Action } from '@ngrx/store';

export const CREATE = '[Pizzas] Create';
export const UPDATE = '[Pizzas] Update';
export const DELETE = '[Pizzas] Delete';

export class Create implements Action {
  readonly type = CREATE;

  constructor(public pizza: Bewerber) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public id: string, public changes: Partial<Bewerber>) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) {}
}

export type PizzaActions = Create | Update | Delete;
