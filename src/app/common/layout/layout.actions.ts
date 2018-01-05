import { Action } from '@ngrx/store';

// Define actions.

export const LayoutActionTypes = {
  OPEN_MODAL: '[Layout] Open Modal',
  CLOSE_MODAL: '[Layout] Close Modal',
};

export class OpenModalAction implements Action {
  type = LayoutActionTypes.OPEN_MODAL;

  constructor(public payload: string) { }
}

export class CloseModalAction implements Action {
  type = LayoutActionTypes.CLOSE_MODAL;

  constructor(public payload: string) { }
}

export type LayoutActions = CloseModalAction | OpenModalAction;
