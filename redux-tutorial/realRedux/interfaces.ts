import {Action} from "redux";


export interface IAppState {
    messages: string[]
}

export interface IAddMessageAction extends Action {
    message: string,
    createdAt: Date
}

export interface IDeleteMessageAction extends Action {
    index: number
}