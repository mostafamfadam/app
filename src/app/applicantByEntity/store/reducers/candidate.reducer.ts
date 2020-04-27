import * as actions from '../actions/candidate.action';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

// main data interface
export interface Bewerber {
  id: string;
  name: string;
  vorname: string;
  alter: number;
  geschlecht: string;
  skills: string;
}

// Entity adapter
export const bewerberAdapter = createEntityAdapter<Bewerber>();
export interface State extends EntityState<Bewerber> {}

const defaultBewerber = {
  id: ['123'],
  entities: {
    id: '123',
    name: 'pizza_one',
    vorname: 'vor',
    alter: 22,
    geschlecht: 'male',
    skills: 'ass,sass,as,sff,sfsf,sfsf,sff,',
  },
};

//
export const initialState: State = bewerberAdapter.getInitialState(
  defaultBewerber
);

export function PizzaReducer(
  state: State = initialState,
  action: actions.PizzaActions
) {
  switch (action.type) {
    case actions.CREATE:
      return bewerberAdapter.addOne(action.pizza, state);

    case actions.UPDATE:
      return bewerberAdapter.updateOne(
        {
          id: action.id,
          changes: action.changes,
        },
        state
      );

    case actions.DELETE:
      return bewerberAdapter.removeOne(action.id, state);

    default:
      return state;
  }
}

export const getPizzaState = createFeatureSelector<State>('pizza');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = bewerberAdapter.getSelectors(getPizzaState);
