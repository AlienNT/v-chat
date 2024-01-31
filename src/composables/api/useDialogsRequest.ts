import {apiRequest} from "../../helpers/request";
import {wsEvents} from "../../api/wsEvents";

import {CreateDialog, DeleteDialog, GetDialogs, UpdateDialog} from "../../interfaces/requests/dialogRequest";

export function useDialogsRequest() {
    function getDialogs({userId}: GetDialogs): void {
        apiRequest({
            type: wsEvents.GET_DIALOGS,
            body: {userId}
        })
    }

    function createDialog({members}: CreateDialog): void {
        apiRequest({
            type: wsEvents.CREATE_DIALOG,
            body: {members}
        })
    }

    function updateDialog({_id, body}: UpdateDialog): void {
        apiRequest({
            type: wsEvents.UPDATE_DIALOG,
            body: {_id, ...body}
        })
    }

    function deleteDialog({_id, userId, forAll = false}: DeleteDialog): void {
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