import {computed, reactive} from "vue";

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
            _id: 5,
            title: 'Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 6,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 7,
            title: 'Alex Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text text text text text text text text text text',
            newMessageAmount: 1
        },
        {
            _id: 8,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 9,
            title: 'Alex Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text text text text text text text text text text',
            newMessageAmount: 1
        },
        {
            _id: 10,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 11,
            title: 'Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 12,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        },
        {
            _id: 13,
            title: 'Alex Alex',
            avatar: '',
            type: 'dialog',
            category: '',
            message: 'text text text text text text text text text text text text',
            newMessageAmount: 1
        },
        {
            _id: 14,
            title: 'Group',
            avatar: '',
            type: 'chat',
            category: '',
            message: 'text text text',
            newMessageAmount: 1
        }
    ],
    filter: null,
    loading: false,
    openedChatId: null
})

export function useChats() {
    const chats = computed(() => {
        return state.filter ?
            state.chatsList.filter(chat => chat.category === state.filter) :
            state.chatsList
    })

    const chat = (id) => computed(() => {
        return state.chatsList?.find(chat => chat?._id === id)
    })

    const openedChatId = computed(() => {
        return state.openedChatId
    })

    function setOpenedChatId(id) {
        return state.openedChatId = id
    }

    return {
        chats,
        chat,

        openedChatId,
        setOpenedChatId
    }
}