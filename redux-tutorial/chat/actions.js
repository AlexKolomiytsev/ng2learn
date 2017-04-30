"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageActions = (function () {
    function MessageActions() {
    }
    MessageActions.addMessage = function (message) {
        return {
            type: 'ADD_MESSAGE',
            message: message,
            createdAt: new Date()
        };
    };
    MessageActions.deleteMessage = function (index) {
        return {
            type: 'DELETE_MESSAGE',
            index: index
        };
    };
    return MessageActions;
}());
exports.MessageActions = MessageActions;
