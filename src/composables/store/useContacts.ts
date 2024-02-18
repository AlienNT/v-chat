import {computed, reactive} from "vue";

interface Contact {
    _id: string
}

interface ContactState {
    contacts: Contact[] | null
}

const state:ContactState = reactive({
    contacts: []
})

export function useContacts () {
    const contacts = computed(() => {
        return state.contacts
    })

    function setContacts(data: Contact[]) {
        state.contacts = data
    }

    function addContact(contact: Contact) {
        state.contacts ? state.contacts.push(contact) : state.contacts = [contact]
    }

    return {
        contacts,
        setContacts,
        addContact
    }
}