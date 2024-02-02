import {apiRequest} from "@/helpers/request";
import {wsEvents} from "@/api/wsEvents";

import {AddMessage, DeleteMessage, GetMessage, UpdateMessage} from "@/interfaces/requests/messageRequest";

export function useMessageRequest() {
    function getMessages({dialogId, userId}: GetMessage): void {
        apiRequest({
            type: wsEvents.GET_MESSAGES,
            body: {dialogId, userId}
        })
    }

    function addMessage({dialogId, message}: AddMessage): void {
        apiRequest({
            type: wsEvents.ADD_MESSAGE,
            body: {message, dialogId}
        })
    }

    function updateMessage({message}: UpdateMessage): void {
        apiRequest({
            type: wsEvents.UPDATE_MESSAGE,
            body: message
        })
    }

    function deleteMessage({_id, userId, forAll = false}: DeleteMessage): void {
        apiRequest({
            type: wsEvents.DELETE_MESSAGE,
            body: {_id, userId, forAll}
        })
    }

    return {
        getMessages,
        addMessage,
        updateMessage,
        deleteMessage
    }
}