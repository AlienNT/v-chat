import {Default} from "./index";
import {User} from "./user";
import {Message} from "./message";

export interface Dialog extends Default {
    members: User[]
    messages: Message[]
    type: 'dialog' | 'group'
}
export interface DialogState {
    dialogs: Dialog[]
}