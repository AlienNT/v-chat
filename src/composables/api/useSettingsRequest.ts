import {apiRequest} from "../../helpers/request";
import {wsEvents} from "../../api/wsEvents";

import {GetSettings, UpdateSettings} from "../../interfaces/requests/settingRequest";

export function useSettingsRequest() {
    function getSettings({userId}: GetSettings): void {
        apiRequest({
            type: wsEvents.GET_SETTINGS,
            body: {userId}
        })
    }

    function updateSettings({userId, body}: UpdateSettings): void {
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