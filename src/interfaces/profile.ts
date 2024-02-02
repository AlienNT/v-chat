import {User} from "./user";

export interface Profile extends User {

}

export interface ProfileState {
    profile: Profile | null
}