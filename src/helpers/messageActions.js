import {useAuth} from "@/composables/store/useAuth.js";
import {useMessages} from "@/composables/store/useMessages.js";
import {useProfile} from "@/composables/store/useProfile.js";
import {useDialogs} from "@/composables/store/useDialogs.js";
import {_} from "@/helpers/fakeLodash.js";

const {setToken} = useAuth()
const {setMessage, setMessages} = useMessages()
const {setProfile} = useProfile()
const {setDialogs} = useDialogs()

export const successActions = {
    setToken: (message) => {
        return setToken({
            token: _.get(message, ['tokens', 'refreshToken'])
        })
    },
    setMessage: (message) => {
        return setMessage({
            dialogId: _.get(message, ['body', 'dialog']),
            message: _.get(message, ['body'])
        })
    },
    setMessages: (message) => {
        return setMessages({
            dialogId: _.get(message, ['body', 'dialog']),
            messages: _.get(message, ['body', 'messages'])
        })
    },
    setProfile: (message) => {
        return setProfile({
            profile: _.get(message, ['body'])
        })
    },
    setDialogs: (message) => {
        return setDialogs({
            dialogs: _.get(message, ['body'])
        })
    },
}