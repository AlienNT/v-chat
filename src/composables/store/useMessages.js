import {computed, reactive} from "vue";

const state = reactive({
    messages: {}
})

export function useMessages() {
    const messages = (dialogId) => computed(() => {
        return state.messages[dialogId]
    })

    function setMessages(dialogId, messages) {
        state.messages[dialogId] = messages
    }

    function setMessage(dialogId, message) {
        !state.messages[dialogId] ?
            state.messages[dialogId] = [message] :
            state.messages[dialogId].push(message)
    }

    function resetMessages() {
        state.messages = {}
    }

    return {
        messages,
        setMessage,
        setMessages,
        resetMessages
    }
}