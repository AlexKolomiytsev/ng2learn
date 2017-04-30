import {IAction} from "./miniRedux";

export interface IAppState {
    messages: string[]
}

export interface IAddMessageAction extends IAction {
    message: string,
    createdAt: Date
}

export interface IDeleteMessageAction extends IAction {
    index: number
}