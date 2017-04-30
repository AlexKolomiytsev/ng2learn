import {InjectionToken} from '@angular/core'

import {compose, createStore, Store, StoreEnhancer} from "redux";
import {AppState} from "./app.state";
import {counterReducer as reducer} from './reducers/counter.reducer'

const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension']
  ? window['devToolsExtension']()
  : f => f

export function createAppStore(): Store<AppState> {
  return createStore<AppState>(
    reducer,
    compose(devtools)
  )
}

export const AppStore = new InjectionToken('App.store')

export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
]
