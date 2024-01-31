import {computed, reactive} from "vue";

import {Auth, IsAuth, Token} from "../../interfaces/auth";

const state: Auth = reactive({
    token: '',
    isAuth: false,
})

export function useAuth() {
    const token = computed((): Token => {
        return state.token
    })

    function setToken({token}: Auth): Token {
        localStorage.setItem('token', token)

        return state.token = token
    }

    const isAuth = computed((): IsAuth => {
        return !!state.token
    })

    function setIsAuth(value: IsAuth): IsAuth {
        return state.isAuth = value
    }


    function resetToken(): void {
        localStorage.removeItem('token')
        state.token = ''
    }

    return {
        token,
        setToken,
        resetToken,
        isAuth,
        setIsAuth,
    }
}