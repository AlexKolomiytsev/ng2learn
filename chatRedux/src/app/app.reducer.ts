import {combineReducers, Reducer} from "redux";
import {UsersReducer, UsersState} from "./reducers/users.reducer";
import {ThreadsReducer, ThreadsState} from "./reducers/threads.reducer";

export * from './reducers/threads.reducer'
export * from './reducers/users.reducer'

export interface AppState {
  users: UsersState;
  thread: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UsersReducer,
  threads: ThreadsReducer
})

export default rootReducer
