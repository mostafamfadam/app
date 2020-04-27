import { ActionReducerMap } from '@ngrx/store';
import { reducer } from 'src/app/applicantByStore/store/reducers/applicant.reducer';
import { PizzaReducer } from 'src/app/applicantByEntity/store/reducers/candidate.reducer';

export const reducers: ActionReducerMap<any> = {
  pizza: PizzaReducer,
  applicant: reducer,
};
