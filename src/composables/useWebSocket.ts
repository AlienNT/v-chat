import {computed, reactive} from "vue";
import {createWebSocket} from "@/helpers/webSocket";

import {Socket, WsSocket} from "@/interfaces/socket";

const state: WsSocket = reactive({
    connected: false,
    readyState: null,
    socket: null
})

createWebSocket(state, {})

export function useWebSocket() {
    const webSocket = computed((): Socket | null => {
        return state.socket || null
    })

    function close(): void {
        webSocket.value?.close()
    }

    function send(message: string): void {
        webSocket.value?.send(message)
    }

    const connected = computed((): boolean => {
        return !!state.connected
    })

    const readyState = computed((): number | null => {
        return state.readyState
    })

    return {
        webSocket,
        close,
        send,
        connected,
        readyState
    }
}