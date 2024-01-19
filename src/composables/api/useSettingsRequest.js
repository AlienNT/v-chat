import {apiRequest} from "@/helpers/request.js";
import {wsEvents} from "@/api/wsEvents.js";

export function useSettingsRequest() {
    function getSettings({userId}) {
        apiRequest({
            type: wsEvents.GET_SETTINGS,
            body: {userId}
        })
    }

    function updateSettings({userId, body}) {
        apiRequest({
            type: wsEvents.GET_SETTINGS,
            body: {userId, ...body}
        })
    }

    return {
        getSettings,
        updateSettings
    }
}