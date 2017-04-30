import {Store, createStore} from 'redux'
import {IAppState} from "./interfaces";
import {MessageActions} from './actions'
import {reducer} from "./reducers";

let store: Store<IAppState> = createStore<IAppState>(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(MessageActions.addMessage('Has it really got a team of snow white horses?'))
store.dispatch(MessageActions.addMessage('Wouldnt have no other kind but silk'))
store.dispatch(MessageActions.addMessage('Has it really got a team of snow white horses?'))

