import {apiRequest} from "@/helpers/request.js";
import {wsEvents} from "@/helpers/webSocket.js";

export function useDialogsRequest() {
    function getDialogs({userId}) {
        apiRequest({
            type: wsEvents.GET_DIALOGS,
            body: {userId}
        })
    }

    function createDialog({members}) {
        apiRequest({
            type: wsEvents.CREATE_DIALOG,
            body: {members}
        })
    }

    function updateDialog({_id, body}) {
        apiRequest({
            type: wsEvents.UPDATE_DIALOG,
            body: {_id, ...body}
        })
    }

    function deleteDialog({_id, userId, forAll = false}) {
        apiRequest({
            type: wsEvents.UPDATE_DIALOG,
            body: {_id, userId, forAll}
        })
    }

    return {
        getDialogs,
        createDialog,
        updateDialog,
        deleteDialog
    }
}