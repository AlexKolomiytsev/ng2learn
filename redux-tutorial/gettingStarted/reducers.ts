import {IAction, IReducer} from "./interfaces";

export let reducer: IReducer<number> = (state: number, action: IAction) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'PLUS':
            return state + action.payload
        default:
            return state
    }
}