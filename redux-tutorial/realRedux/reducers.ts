import {Action, Reducer} from "redux";
import {IAddMessageAction, IAppState, IDeleteMessageAction} from "./interfaces";

let initialState: IAppState = {messages: []}

export let reducer: Reducer<IAppState> = (state: IAppState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                messages: state.messages.concat((<IAddMessageAction>action).message)
            }
        case 'DELETE_MESSAGE':
            let idx = (<IDeleteMessageAction>action).index
            return {
                messages: [
                    ...state.messages.slice(0, idx),
                    ...state.messages.slice(idx + 1, state.messages.length)
                ]
            }
    }
}