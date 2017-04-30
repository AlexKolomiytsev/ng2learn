"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var actions_1 = require("./actions");
var reducers_1 = require("./reducers");
var store = redux_1.createStore(reducers_1.reducer);
store.subscribe(function () {
    console.log(store.getState());
});
store.dispatch(actions_1.MessageActions.addMessage('Has it really got a team of snow white horses?'));
store.dispatch(actions_1.MessageActions.addMessage('Wouldnt have no other kind but silk'));
store.dispatch(actions_1.MessageActions.addMessage('Has it really got a team of snow white horses?'));
