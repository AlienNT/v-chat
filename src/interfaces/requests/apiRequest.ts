import {Default} from "../index";

export interface DefaultRequest extends Default {
    type: string
}

export interface ApiRequest {
    type: string
    body?: any
}