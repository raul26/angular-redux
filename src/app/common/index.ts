import { createSelector } from 'reselect';
import { storeLogger } from 'ngrx-store-logger';
import { compose } from '@ngrx/core';
import { combineReducers } from '@ngrx/store';

import * as fromLayout from './layout/layout.reducer';
import { reducer } from './layout/layout.reducer';

export interface AppState {
  layout: fromLayout.State;
}

export const reducers = {
  layout: fromLayout.reducer,
};

const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);

export function metaReducer(state: any, action: any) {
  return developmentReducer(state, action);
}

export const getLayoutState = (state: AppState) => state.layout;

export const getLayoutOpenedModalName = createSelector(getLayoutState, fromLayout.getOpenedModalName);
