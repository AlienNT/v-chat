import {DefaultRequest} from "./apiRequest";

export interface GetProfile extends DefaultRequest {

}
export interface UpdateProfile extends DefaultRequest {
    body: any
}