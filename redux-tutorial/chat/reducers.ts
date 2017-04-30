import {IAction, IReducer} from "./miniRedux";
import {IAddMessageAction, IAppState, IDeleteMessageAction} from "./interfaces";

export let reducer: IReducer<IAppState> = (state: IAppState, action: IAction): IAppState => {
    switch(action.type) {
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