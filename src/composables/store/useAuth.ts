import {computed, reactive} from "vue";

import {Auth, IsAuth, Token} from "@/interfaces/auth";

const state: Auth = reactive({
    token: null,
    isAuth: false,
})

export function useAuth() {
    const token = computed((): Token | null => {
        return state.token
    })

    function setToken({token}: Auth): void {
        token && localStorage.setItem('token', token)

        state.token = token
    }

    const isAuth = computed((): IsAuth => {
        return !!state.token
    })

    function setIsAuth(value: IsAuth): IsAuth {
        return state.isAuth = value
    }


    function resetToken(): void {
        localStorage.removeItem('token')
        state.token = null
    }

    return {
        token,
        setToken,
        resetToken,
        isAuth,
        setIsAuth,
    }
}