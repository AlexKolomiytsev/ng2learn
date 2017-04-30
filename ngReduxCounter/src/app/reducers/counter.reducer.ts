import {Action, Reducer} from "redux";

import { INCREMENT, DECREMENT } from '../actions/counter.actions'
import {AppState} from "../app.state";

const initalState: AppState = {counter: 0}

export const counterReducer: Reducer<AppState> = (state: AppState = initalState, action: Action): AppState => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {counter: state.counter + 1})
    case DECREMENT:
      return Object.assign({}, state, {counter: state.counter - 1})
    default:
      return state
  }
}
