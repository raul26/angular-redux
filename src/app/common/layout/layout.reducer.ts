import * as layout from './layout.actions';
import { stat } from 'fs';
// Description of different layout parts goes here.
export interface State {
  openedModalName: string;
}

const initialState: State = {
  openedModalName: null,
};

export function reducer(state = initialState, action: layout.LayoutActions): State {
  switch (action.type) {
    case layout.LayoutActionTypes.OPEN_MODAL: {
      const name = action.payload;
      return Object.assign({}, state, {
        openedModalName: name,
      });
    }
    case layout.LayoutActionTypes.CLOSE_MODAL: {
      return Object.assign({}, state, {
        openedModalName: null,
      });
    }
    default:
    return state;
  }
}

export const getOpenedModalName = (state: State) => state.openedModalName;
