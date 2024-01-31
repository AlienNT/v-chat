import {DefaultRequest} from "./apiRequest";
import {Id} from "../index";

export interface GetSettings extends DefaultRequest {
    userId: Id
}

export interface UpdateSettings extends DefaultRequest {
    userId: Id
    body: any
}
