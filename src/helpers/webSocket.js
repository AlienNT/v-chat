import ApiConfig from "../../config/apiConfig.js";
import {successActions} from "@/helpers/messageActions.js";
import {wsEvents} from "@/api/wsEvents.js";

export function createWebSocket(state, {
    url = ApiConfig.API_URL,
    reconnect = true
}) {
    state.socket = new WebSocket(url)

    state.socket.onopen = (event) =>
        onOpen({
            state,
            event
        })

    state.socket.onclose = (event) =>
        onClose({
            state,
            reconnect,
            url,
            event
        })

    state.socket.onmessage = (event) =>
        onMessage({
            state,
            event
        })

    state.socket.onerror = (event) =>
        onError({
            state,
            event
        })

    return state.socket
}

function onOpen({state, event}) {
    console.group('onOpen')
    console.log('event', event)
    console.groupEnd()

    state.connected = true
}

function onMessage({state, event}) {
    const message = JSON.parse(event?.data)

    console.group('onMessage')
    console.log('message', message)
    console.groupEnd()

    if (message.status !== 200) {
        return errorAction(state, message)
    }

    messageAction(state, message)
}

function onError({state, event}) {
    console.group('onError')
    console.log('event', event)
    console.groupEnd()
}

function onClose({state, reconnect, url, event}) {
    console.group('onClose')
    console.log('event', event)
    console.groupEnd()

    state.connected = false

    if (!reconnect) return

    createWebSocket(state, {
        reconnect,
        url
    })
}

function messageAction(state, message) {
    switch (message?.type) {
        case wsEvents.LOGIN:
            return successActions.setToken(message)

        case wsEvents.ADD_MESSAGE:
            return successActions.setMessage(message)

        case wsEvents.GET_MESSAGES:
            return successActions.setMessages(message)

        case wsEvents.GET_PROFILE:
            return successActions.setProfile(message)

        case wsEvents.GET_DIALOGS:
            return successActions.setDialogs(message)
    }
}

function errorAction(state, message) {
    console.group('ERROR: ' + message?.type)
    console.log('message', message)
    console.groupEnd()
}

