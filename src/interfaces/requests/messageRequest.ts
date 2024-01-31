import {DefaultRequest} from "./apiRequest";
import {Id} from "../index";
import {Message} from "../message";

export interface GetMessage extends DefaultRequest {
    dialogId: Id
    userId: Id
}

export interface AddMessage extends DefaultRequest {
    message: Message
    dialogId: Id
}

export interface UpdateMessage extends DefaultRequest {
    message: Message
}

export interface DeleteMessage extends DefaultRequest {
    userId: Id
    forAll: boolean
}