import {Store} from "./miniRedux";
import {IAddMessageAction, IAppState} from "./interfaces";
import {reducer} from "./reducers";
import {MessageActions} from './actions'

let store = new Store<IAppState>(reducer, {messages: []})
console.log(store.getState())

store.dispatch(MessageActions.addMessage('Has it really got a team of snow white horses?'))
store.dispatch(MessageActions.addMessage('Wouldnt have no other kind but silk'))
store.dispatch(MessageActions.addMessage('Has it really got a team of snow white horses?'))

console.log(store.getState())