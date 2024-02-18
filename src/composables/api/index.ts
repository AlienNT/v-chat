import {useAuthRequest} from "@/composables/api/useAuthRequest";
import {useContactsRequest} from "@/composables/api/useContactsRequest";
import {useDialogsRequest} from "@/composables/api/useDialogsRequest";
import {useMessageRequest} from "@/composables/api/useMessageRequest";
import {useSettingsRequest} from "@/composables/api/useSettingsRequest";

export function useApi() {
    return {
        ...useAuthRequest(),
        ...useContactsRequest(),
        ...useDialogsRequest(),
        ...useMessageRequest(),
        ...useSettingsRequest(),
    }
}