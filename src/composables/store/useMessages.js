import {computed, reactive} from "vue";

const state = reactive({
    dialogs: {},
    members: []
})

export function useMessages() {
    const messages = (dialogId) => computed(() => {
        return state.dialogs[dialogId]
    })

    function setMessages({dialogId, messages}) {
        state.dialogs[dialogId] = messages
    }

    function setMessage({dialogId, message}) {
        !state.dialogs[dialogId] ?
            state.dialogs[dialogId] = [message] :
            state.dialogs[dialogId].push(message)
    }
    function resetMessages() {
        state.dialogs = {}
        state.members = []
    }

    return {
        messages,
        setMessage,
        setMessages,
        resetMessages
    }
}