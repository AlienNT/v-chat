import {Id} from "../index";
import {DefaultRequest} from "./apiRequest";

export interface GetDialogs extends DefaultRequest {
    userId?: string
}

export interface CreateDialog extends DefaultRequest {
    members: Id[]
}

export interface UpdateDialog extends DefaultRequest {
    body: any
}

export interface DeleteDialog extends DefaultRequest {
    userId: Id
    forAll: boolean
}