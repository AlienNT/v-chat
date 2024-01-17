import {apiRequest} from "@/helpers/request.js";
import {wsEvents} from "@/helpers/webSocket.js";

export function useMessageRequest() {

    function getMessages({dialogId, userId}) {
        apiRequest({
            type: wsEvents.GET_MESSAGES,
            body: {dialogId, userId}
        })
    }
    function addMessage({dialogId, message}) {
        apiRequest({
            type: wsEvents.ADD_MESSAGE,
            body: {message, dialogId}
        })
    }

    function updateMessage({message}) {
        apiRequest({
            type: wsEvents.UPDATE_MESSAGE,
            body: message
        })
    }

    function deleteMessage({_id, userId, forAll = false}) {
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