import {computed, reactive} from "vue";
import {createWebSocket} from "@/helpers/webSocket.js";

const state = reactive({
    connected: false,
    readyState: null,
    socket: null
})

createWebSocket(state, {})

export function useWebSocket() {
    const webSocket = computed(() => {
        return state.socket
    })

    function close() {
        webSocket.value?.close()
    }

    function send(message) {
        webSocket.value?.send(message)
    }

    const connected = computed(() => {
        return state.connected
    })

    const readyState = computed(() => {
        return state.readyState
    })

    return {
        webSocket,

        close,
        send,

        connected,
        readyState,
    }
}