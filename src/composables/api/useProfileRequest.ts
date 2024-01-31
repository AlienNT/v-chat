import {apiRequest} from "../../helpers/request";
import {wsEvents} from "../../api/wsEvents";

import {GetProfile, UpdateProfile} from "../../interfaces/requests/profileRequest";

export function useProfileRequest() {
    function getProfile({_id}: GetProfile): void {
        apiRequest({
            type: wsEvents.GET_PROFILE,
            body: {_id}
        })
    }

    function updateProfile({body}: UpdateProfile): void {
        apiRequest({
            type: wsEvents.UPDATE_PROFILE,
            body
        })
    }

    return {
        getProfile,
        updateProfile
    }
}