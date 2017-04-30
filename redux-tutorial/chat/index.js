"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var miniRedux_1 = require("./miniRedux");
var reducers_1 = require("./reducers");
var actions_1 = require("./actions");
var store = new miniRedux_1.Store(reducers_1.reducer, { messages: [] });
console.log(store.getState());
store.dispatch(actions_1.MessageActions.addMessage('Has it really got a team of snow white horses?'));
store.dispatch(actions_1.MessageActions.addMessage('Wouldnt have no other kind but silk'));
store.dispatch(actions_1.MessageActions.addMessage('Has it really got a team of snow white horses?'));
console.log(store.getState());
