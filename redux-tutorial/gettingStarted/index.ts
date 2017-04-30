//using actions
console.log(' --- using actions')
import {decrementAction, incrementAction, plusSevenAction, unknownAction} from "./actions";
import {reducer} from "./reducers";
import {Store} from "./store";

console.log(reducer(1, unknownAction)) // -> 1
console.log(reducer(1, incrementAction)) // -> 2
console.log(reducer(99, decrementAction)) // -> 98
console.log(reducer(0, plusSevenAction)) // -> 7

//using store
console.log(' --- using store')
let store = new Store<number>(reducer, 0)
console.log(store.getState())

let unsubscribe = store.subscribe(() => {
    console.log('subscribed: ', store.getState())
})

store.dispatch(unknownAction)
store.dispatch(plusSevenAction)
store.dispatch(incrementAction)
store.dispatch(decrementAction)

unsubscribe()
store.dispatch(decrementAction) // nothing logged
console.log(store.getState()) //but actually state changed





