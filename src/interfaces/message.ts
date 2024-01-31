import {Default, Id} from "./index";
import {User} from "./user";
import {Dialog} from "./dialog";

export interface Message extends Default {
    sender: User | string
    dialog: Dialog | string
    type: 'text'
    delivered: boolean
    read: boolean
    message: string
    files: [] | string
}

export interface MessagesState {
    dialogs: {}
    members: User[]
}
export interface SetMessages {
    dialogId: Id
    messages: Message[]
}
export interface SetMessage {
    dialogId: Id
    message: Message
}