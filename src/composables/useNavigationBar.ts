import {computed, reactive} from "vue";

import {Navigation, NavigationState} from "../interfaces/navigation";

const state: NavigationState = reactive({
    navigationList: [
        {
            _id: '1',
            name: 'contacts',
            path: '/contacts',
            title: 'Контакты',
            isShow: true,
            order: 1
        },
        {
            _id: '2',
            name: 'chats',
            path: '/chats',
            title: 'Чаты',
            isShow: true,
            order: 1
        },
        {
            _id: '3',
            name: 'settings',
            path: '/settings',
            title: 'Настройки',
            isShow: true,
            order: 1
        },
    ]
})

export function useNavigationBar(): object {
    const navigationList = computed((): Navigation[] => {
        return state.navigationList
    })

    return {
        navigationList
    }
}