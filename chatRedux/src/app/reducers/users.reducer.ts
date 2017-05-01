import {Action, Reducer} from "redux";

import {User} from '../models'
import * as UserActions from '../actions/user.actions'

export interface UsersState {
  currentUser: User
}

const initialState: UsersState = {
  currentUser: null
}

export const UsersReducer: Reducer<UsersState> = (state: UsersState = initialState, action: Action) => {
  switch (action.type) {
    case UserActions.SET_CURRENT_USER:
      const user: User = (<UserActions.SetCurrentUserAction>action).user;
      return {
        currentUser: user
      };
    default:
      return state
  }
}
