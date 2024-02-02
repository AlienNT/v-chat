import {Id} from "../index";
import {DefaultRequest} from "./apiRequest";

export interface GetDialogs extends DefaultRequest {
    userId?: string | null
}

export interface CreateDialog extends DefaultRequest {
    members: Id[]
}

export interface UpdateDialog extends DefaultRequest {
    _id: Id
    body: any
}

export interface DeleteDialog extends DefaultRequest {
    _id: Id
    userId: Id
    forAll: boolean
}