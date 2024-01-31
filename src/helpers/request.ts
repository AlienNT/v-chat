import {useWebSocket} from "../composables/useWebSocket";
import {useAuth} from "../composables/store/useAuth";

import {ApiRequest} from "../interfaces/requests/apiRequest";

const {send} = useWebSocket()
const {token} = useAuth()

export function apiRequest({type, body}: ApiRequest): void {
    console.group('apiRequest')
    console.log('body', body)
    console.groupEnd()

    send(JSON.stringify({
        type,
        body,
        token: token.value
    }))
}