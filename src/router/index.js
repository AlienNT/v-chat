import routerNames from "@/router/routerNames.js";
import {createRouter, createWebHistory} from "vue-router";
import {useAuth} from "@/composables/useAuth.js";

const {isAuth} = useAuth()

const router = createRouter({
    routes: [
        {
            path: routerNames.AUTH_PAGE.path,
            name: routerNames.AUTH_PAGE.name,
            component: () => import('@/pages/AuthPage.vue'),
            children: [
                {
                    path: '',
                    name: 'login',
                    component: () => import('@/components/auth/LoginForm.vue')
                },
                {
                    path: '',
                    name: 'registration',
                    component: () => import('@/components/auth/RegistrationForm.vue')
                },
            ]
        },
        {
            path: routerNames.CHATS_PAGE.path,
            name: routerNames.CHATS_PAGE.name,
            component: () => import('@/pages/ChatsPage.vue'),
            children: [
                {
                    path: ':id',
                    name: 'chat-window',
                    component: () => import('@/components/chatWindow/ChatWindow.vue')
                },
                {
                    path: '',
                    name: 'empty-title',
                    component: () => import('@/components/chatWindow/ChatWindowEmptyTitle.vue')
                }
            ]
        },
        {
            path: routerNames.SETTINGS_PAGE.path,
            name: routerNames.SETTINGS_PAGE.name,
            component: () => import('@/pages/SettingsPage.vue')
        },
        {
            path: routerNames.PROFILE.path,
            name: routerNames.PROFILE.name,
            component: () => import('@/pages/ProfilePage.vue')
        }
    ],
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    if (to.fullPath === routerNames.AUTH_PAGE.path) {
        return next()
    }
    if (!isAuth.value) {
        return next({path: routerNames.AUTH_PAGE.path})
    }

    return next()
})

export default router