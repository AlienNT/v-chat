import {_} from "./fakeLodash";
import {useAuth} from "../composables/store/useAuth";
import {useMessages} from "../composables/store/useMessages";
import {useProfile} from "../composables/store/useProfile";
import {useDialogs} from "../composables/store/useDialogs";

const {setToken} = useAuth()
const {setMessage, setMessages} = useMessages()
const {setProfile} = useProfile()
const {setDialogs} = useDialogs()

export const successActions = {
    setToken: (message: string) => {
        // @ts-ignore
        return setToken({
            token: _.get(message, ['tokens', 'refreshToken'])
        })
    },
    setMessage: (message: string) => {
        return setMessage({
            dialogId: _.get(message, ['body', 'dialog']),
            message: _.get(message, ['body'])
        })
    },
    setMessages: (message: string) => {
        return setMessages({
            dialogId: _.get(message, ['body', 'dialog']),
            messages: _.get(message, ['body', 'messages'])
        })
    },
    setProfile: (message:string) => {
        return setProfile({
            profile: _.get(message, ['body'])
        })
    },
    setDialogs: (message:string) => {
        return setDialogs({
            dialogs: _.get(message, ['body'])
        })
    },
}