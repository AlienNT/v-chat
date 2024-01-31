import {createRouter, createWebHistory} from "vue-router";
import {useAuth} from "@/composables/store/useAuth.ts";
import routerNames from "@/router/routerNames.js";
import routes from "@/router/routes.js";

const {isAuth} = useAuth()

const router = createRouter({
    routes,
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