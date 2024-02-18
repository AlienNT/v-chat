import {useAuth} from "@/composables/store/useAuth";
import {useDialogs} from "@/composables/store/useDialogs";
import {useMessages} from "@/composables/store/useMessages";
import {useSettings} from "@/composables/store/useSettings";
import {useContacts} from "@/composables/store/useContacts";

export function useStore() {
    return {
        ...useAuth(),
        ...useDialogs(),
        ...useMessages(),
        ...useSettings(),
        ...useContacts()
    }
}