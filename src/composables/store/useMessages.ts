import {computed, reactive} from "vue";

import {Message, MessagesState, SetMessage, SetMessages} from "../../interfaces/message";
import {Id} from "../../interfaces";

const state: MessagesState = reactive({
    dialogs: {},
    members: []
})

export function useMessages() {
    const messages = (dialogId: Id) => computed((): Message[] => {
        return state.dialogs[dialogId]
    })

    function setMessages({dialogId, messages}: SetMessages): void {
        state.dialogs[dialogId] = messages
    }

    function setMessage({dialogId, message}: SetMessage): void {
        !state.dialogs[dialogId] ?
            state.dialogs[dialogId] = [message] :
            state.dialogs[dialogId].push(message)
    }

    function resetMessages(): void {
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