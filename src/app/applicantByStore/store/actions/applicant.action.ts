import { Applicant } from '../models/applicant.model';
import { Action } from '@ngrx/store';

export const ADD_APPLICANT = '[APPLICANT] Add';
export const DELETE_APPLICANT = '[APPLICANT] Delete';
export const REMOVE_APPLICANT = '[APPLICANT] Remove';

export class AddApplicant implements Action {
  readonly type = ADD_APPLICANT;
  constructor(public payload: Applicant) {}
}

export class RemoveApplicant implements Action {
  type = REMOVE_APPLICANT;

  constructor(public payload: Object) {}
}

export class DeleteApplicant implements Action {
  readonly type = DELETE_APPLICANT;

  constructor(public id: number) {}
}

//export type Action_Remove = RemoveApplicant;
export type Actions = AddApplicant | RemoveApplicant | DeleteApplicant;
