import {apiRequest} from "@/helpers/request";
import {wsEvents} from "@/api/wsEvents";
export function useContactsRequest() {
    async function fetchContacts() {
        apiRequest({
            type: wsEvents.GET_CONTACTS
        })
    }

    function createContact({contactId}) {
        apiRequest({
            type: wsEvents.ADD_CONTACT,
            body: {contactId}
        })
    }
    return {
        fetchContacts,
        createContact
    }
}