import {useWebSocket} from "@/composables/useWebSocket.js";
import {useAuth} from "@/composables/useAuth.js";

const {send} = useWebSocket()
const {token} = useAuth()

export function apiRequest({type, body}) {
    console.group('apiRequest')
    console.log('body', body)
    console.groupEnd()

    send(JSON.stringify({
        type,
        body,
        token: token.value
    }))
}