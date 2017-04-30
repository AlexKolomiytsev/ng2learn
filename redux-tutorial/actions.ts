import {IAction} from "./interfaces";

export let unknownAction: IAction = {type: "UNKNOWN"}
export let incrementAction: IAction = {type: "INCREMENT"}
export let decrementAction: IAction = {type: "DECREMENT"}
export let plusSevenAction: IAction = {type: "PLUS", payload: 7}