import { Action } from '@ngrx/store';
import { Applicant } from '../models/applicant.model';
import * as ApplicantActions from '../actions/applicant.action';

const initialState: Applicant = {
  id: 0,
  name: 'adam',
  vorname: 'nggx',
  alter: 20,
  geschlecht: 'male',
  skills: 'skl,sko,skoo',
};

export function reducer(
  state: Applicant[] = [initialState],
  action: ApplicantActions.Actions
) {
  switch (action.type) {
    case ApplicantActions.ADD_APPLICANT:
      return [...state, action.payload];

    case ApplicantActions.REMOVE_APPLICANT:
      // return state.filter((item) => item.id !== action.payload.id);
      console.log('payload: ', Number(action.payload));

      //const id = action.payload;
      //return [...state.slice(0, Number(action.payload))];
      return state.filter((item) => item.id !== Number(action.payload));

    default:
      return state;
  }
}
