import {useAuth} from "@/composables/store/useAuth.js";
import ApiConfig from "../../config/apiConfig.js";
import {useMessages} from "@/composables/store/useMessages.js";
import {useProfile} from "@/composables/store/useProfile.js";
import {useDialogs} from "@/composables/store/useDialogs.js";

const {setToken} = useAuth()
const {setMessage, setMessages} = useMessages()
const {setProfile} = useProfile()
const {setDialogs} = useDialogs()

export const wsEvents = {
    LOGIN: 'login',
    LOGOUT: 'logout',
    REGISTRATION: 'registration',
    CREATE_DIALOG: 'createDialog',
    UPDATE_DIALOG: 'updateDialog',
    GET_DIALOGS: 'getDialogs',
    DELETE_DIALOG: 'deleteDialog',
    ADD_MESSAGE: 'addMessage',
    UPDATE_MESSAGE: 'updateMessage',
    DELETE_MESSAGE: 'deleteMessage',
    GET_MESSAGES: 'getMessages',
    RESPONSE_STATUS: 'responseStatus',
    GET_PROFILE: 'getProfile',
    UPDATE_PROFILE: 'updateProfile',
    GET_SETTINGS: 'getSettings',
    UPDATE_SETTINGS: 'updateSettings'

}

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
            return setToken(message?.tokens?.refreshToken)

        case wsEvents.ADD_MESSAGE:
            return setMessage(message?.body?.dialogId, message?.body)

        case wsEvents.GET_MESSAGES:
            return setMessages(message?.body?.dialogId, message?.body?.messages)

        case wsEvents.GET_PROFILE:
            return setProfile(message?.body)

        case wsEvents.GET_DIALOGS:
            return setDialogs(message?.body)
    }
}
