import {DefaultRequest} from "./apiRequest";
import {Id} from "@/interfaces";

export interface GetProfile extends DefaultRequest {
    _id: Id
}

export interface UpdateProfile extends DefaultRequest {
    body: any
}