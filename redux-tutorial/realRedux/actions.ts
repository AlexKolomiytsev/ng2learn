import {IAddMessageAction, IDeleteMessageAction} from "./interfaces";

export class MessageActions {
    static addMessage(message: string): IAddMessageAction {
        return {
            type: 'ADD_MESSAGE',
            message,
            createdAt: new Date()
        }
    }
    static deleteMessage(index: number): IDeleteMessageAction {
        return {
            type: 'DELETE_MESSAGE',
            index
        }
    }
}