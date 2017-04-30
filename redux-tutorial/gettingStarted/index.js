"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//using actions
console.log(' --- using actions');
var actions_1 = require("./actions");
var reducers_1 = require("./reducers");
var store_1 = require("./store");
console.log(reducers_1.reducer(1, actions_1.unknownAction)); // -> 1
console.log(reducers_1.reducer(1, actions_1.incrementAction)); // -> 2
console.log(reducers_1.reducer(99, actions_1.decrementAction)); // -> 98
console.log(reducers_1.reducer(0, actions_1.plusSevenAction)); // -> 7
//using store
console.log(' --- using store');
var store = new store_1.Store(reducers_1.reducer, 0);
console.log(store.getState());
var unsubscribe = store.subscribe(function () {
    console.log('subscribed: ', store.getState());
});
store.dispatch(actions_1.unknownAction);
store.dispatch(actions_1.plusSevenAction);
store.dispatch(actions_1.incrementAction);
store.dispatch(actions_1.decrementAction);
unsubscribe();
store.dispatch(actions_1.decrementAction); // nothing logged
console.log(store.getState()); //but actually state changed
