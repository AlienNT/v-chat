import {apiRequest} from "@/helpers/request.js";
import {wsEvents} from "@/helpers/webSocket.js";

export function useProfileRequest() {
    function getProfile({_id}) {
        apiRequest({
            type: wsEvents.GET_PROFILE,
            body: {_id}
        })
    }

    function updateProfile({body}) {
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