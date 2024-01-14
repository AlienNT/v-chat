import {computed, reactive} from "vue";

const state = reactive({
    navigationList: [
        {
            _id: 1,
            name: 'profile',
            path: '/profile',
            title: 'Профиль',
            isShow: true,
            order: 1
        },
        {
            _id: 2,
            name: 'chats',
            path: '/chats',
            title: 'Чаты',
            isShow: true,
            order: 1
        },
        {
            _id: 3,
            name: 'settings',
            path: '/settings',
            title: 'Настройки',
            isShow: true,
            order: 1
        },
    ]
})

export function useNavigationBar() {
    const navigationList = computed(() => {
        return state.navigationList
    })

    return {
        navigationList
    }
}