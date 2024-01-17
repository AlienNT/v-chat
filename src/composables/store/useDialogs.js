import {computed, reactive} from "vue";

const state = reactive({
    dialogs: []
})

export function useDialogs() {
    const dialogs = computed(() => {
        return state.dialogs
    })

    const dialog = (_id) => computed(() => {
        return state.dialogs.find(dialog => dialog?._id === _id)
    })

    function setDialogs(data) {
        console.log('setDialogs', data)
        state.dialogs = [...state.dialogs, ...data]
    }

    function resetDialogs() {
        state.dialogs = []
    }

    return {
        dialogs,
        dialog,
        setDialogs,
        resetDialogs
    }
}