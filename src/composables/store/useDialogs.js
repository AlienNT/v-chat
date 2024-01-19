import {computed, reactive} from "vue";

const state = reactive({
    dialogs: [],
})

export function useDialogs() {
    const dialogs = computed(() => {
        return state.dialogs
    })

    const dialog = (_id) => computed(() => {
        return state.dialogs.find(dialog => dialog?._id === _id)
    })

    const members = (dialogId) => computed(() => {
        return dialog(dialogId).value?.members
    })

    function setDialogs({dialogs}) {
        console.log('setDialogs', dialogs)
        state.dialogs = [...state.dialogs, ...dialogs]
    }

    function resetDialogs() {
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