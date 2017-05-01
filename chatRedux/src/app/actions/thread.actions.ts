/*
 * System imports
 */
import {Action, ActionCreator} from "redux";

/*
 * Project imports
 */
import {Thread, Message} from '../models'
import {uuid} from "../utils/helpers";

/*
 * Constants
 */
export const ADD_THREAD = '[Thread] Add Thread';
export const ADD_MESSAGE = '[Thread] Add Message';
export const SELECT_THREAD = '[Thread] Select Thread'

/*
 * Interfaces
 */
export interface AddThreadAction extends Action {
  thread: Thread
}
export interface AddMessageAction extends Action {
  thread: Thread,
  message: Message
}
export interface SelectThreadAction extends Action {
  thread: Thread
}

/*
 * Actions
 */
export const addThread: ActionCreator<AddThreadAction> = (thread) => ({
  type: ADD_THREAD,
  thread: thread
});

export const addMessage: ActionCreator<AddMessageAction> = (thread: Thread, messageArgs: Message): AddMessageAction => {
  const defaults = {
    id: uuid(),
    sentAt: new Date(),
    isRead: false,
    thread: thread
  };

  const message: Message = Object.assign({}, defaults, messageArgs);

  return {
    type: ADD_MESSAGE,
    thread: thread,
    message: message
  }
};

export const selectThread: ActionCreator<SelectThreadAction> = (thread) => ({
  type: SELECT_THREAD,
  thread: thread
});
