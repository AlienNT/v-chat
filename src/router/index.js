import {createRouter, createWebHistory} from "vue-router";
import routerNames from "@/router/routerNames.js";
import {useAuth} from "@/composables/useAuth.js";

const {isAuth} = useAuth()

const router = createRouter({
    routes: [
        {
            path: routerNames.AUTH_PAGE.path,
            name: routerNames.AUTH_PAGE.name,
            component: () => import('@/pages/AuthPage.vue')
        },
        {
            path: routerNames.DIALOGS_PAGE.path,
            name: routerNames.DIALOGS_PAGE.name,
            component: () => import('@/pages/DialogsPage.vue')
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
})

export default router