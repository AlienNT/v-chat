import ApiConfig from "../../config/apiConfig.js";
import {computed, reactive} from "vue";

const socket = new WebSocket(ApiConfig.API_URL)

const events = {
    ADD_MESSAGE: 'addMessage',
    DELETE_MESSAGE: 'deleteMessage'
}

export function useWebSocket() {
    const webSocket = socket

    function close() {
        socket.close()
    }

    function send(message) {
        socket.send(message)
    }

    return {
        webSocket,
        close,
        send
    }
}