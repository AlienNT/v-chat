import {Default} from "./index";
import {Dialog} from "./dialog";
import {Token} from "./auth";

export interface User extends Default{
    _id: string
    login: string
    name: string | null
    lastName?: string | null
    avatar?: string | null
    username: string
    settings?: string | {}
    dialogs?:string | Dialog
    tokens?:Token | null
}