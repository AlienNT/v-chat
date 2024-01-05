import {computed, reactive} from "vue";
import axios from "axios";

const state = reactive({
    chatsList: [
        {
            _id: 1,
            title: 'Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 2,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 3,
            title: 'Alex Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text text text text text text text text text text',
            newMessageAmount: 1
        },
        {
            _id: 4,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 1,
            title: 'Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 2,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 3,
            title: 'Alex Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text text text text text text text text text text',
            newMessageAmount: 1
        },
        {
            _id: 2,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 3,
            title: 'Alex Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text text text text text text text text text text',
            newMessageAmount: 1
        },
        {
            _id: 4,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 1,
            title: 'Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 2,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 3,
            title: 'Alex Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text text text text text text text text text text',
            newMessageAmount: 1
        },
        {
            _id: 4,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        }
    ],
    filter: null,
    loading: false
})

export function useChats() {
    const chats = computed(() => {
        return state.filter ? state.chatsList.filter(chat => chat.category === state.filter) : state.chatsList
    })

    async function setChatsList(data) {
        return state.chatsList = data
    }

    async function fetchChatsList() {
        setChatsLoading()

    }

    const chatsLoading = computed(() => {
        return state.loading
    })

    function setChatsLoading(value) {
        return state.loading = value
    }

    return {
        chats,
        setChatsList,
        fetchChatsList,
        chatsLoading


    }
}