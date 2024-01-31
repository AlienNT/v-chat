import {computed, reactive} from "vue";

import {Dialog, DialogState} from "../../interfaces/dialog";
import {Id} from "../../interfaces";
import {User} from "../../interfaces/user";

const state: DialogState = reactive({
    dialogs: [],
})

export function useDialogs() {
    const dialogs = computed(() => {
        return state.dialogs
    })

    const dialog = (_id: Id) => computed((): Dialog => {
        return state.dialogs.find((dialog: Dialog) => dialog._id === _id)
    })

    const members = (dialogId: Id) => computed((): User[] => {
        return dialog(dialogId).value?.members
    })

    function setDialogs({dialogs}: DialogState): void {
        state.dialogs = [...state.dialogs, ...dialogs]
    }

    function resetDialogs(): void {
        state.dialogs = []
    }

    return {
        dialogs,
        dialog,
        members,
        setDialogs,
        resetDialogs
    }
}